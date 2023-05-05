import LeftTopSvg from "Components/Shared/Svg/LeftTopSvg/LeftTopSvg";
import styles from "../Styles/register.module.css";

import { AuthContext } from "Contexts/AuthContext";
import { register } from "Services/authService";
import { IUser } from "Types/User.type";
import { emailValidator, minLength, passwordsMatch } from "Utils/Validators";
import React, { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RightBottomSvg from "Components/Shared/Svg/RightBottomSvg/RightBottomSvg";
import HeadAndError from "Components/Forms/Header/HeadAndError";
import SubmitButton from "Components/Forms/SubmitButton/SubmitButton";

function Register() {
  const authContext = useContext(AuthContext);
  let currentUserLoginHandler!: (arg0: IUser) => void;
  if (authContext) {
    currentUserLoginHandler = authContext.currentUserLoginHandler;
  }

  const [isLoading, setIsLoading] = useState(false);

  const navigateTo = useNavigate();

  const [image, setImage] = useState(false);

  const [imgSrc, setImgSrc] = useState("");

  const [file, setFile] = useState<File>();

  const [error, setError] = useState("");

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    rePass: false,
  });

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    rePass: "",
  });

  const onChangeValueHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    if (e.target.files?.length) {
      const file = e.target.files[0];
      setImgSrc(URL.createObjectURL(file));
      setImage(true);
      setFile(file);
    }
  };

  const invalidForm =
    Object.values(formValues).some((x) => x === "") ||
    Object.values(errors).some((x) => x) ||
    image === false;

  const onSubmitHandler = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setIsLoading(true);

    const formData: FormData = new FormData();
    formData.append("username", formValues.username);
    formData.append("email", formValues.email);
    formData.append("password", formValues.password);
    if (file) {
      formData.append("file", file);
    }

    try {
      const user = await register(formData);
      currentUserLoginHandler(user);
      setIsLoading(false);
      navigateTo("/");
    } catch (err: Error | any) {
      const error = err.response.data.message;
      setError(error);
      setIsLoading(false);
    }

    //IF that don't work i have to unlock my google drive (sharing with any)
  };

  return (
    <section className={styles["register-container"]}>
      <LeftTopSvg />

      <div className={styles["register-wrapper"]}>
        <HeadAndError title="SIGN IN" error={error} />

        <div className={styles["img-side"]}>
          <div>{image && <img src={imgSrc} alt="profile" />}</div>

          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className={styles["form-side"]}>
          <form onSubmit={onSubmitHandler}>
            <div className={styles["input-group"]}>
              <input
                type="text"
                name="username"
                id="register-username"
                autoComplete="off"
                required={true}
                className={styles["input"]}
                value={formValues.username}
                onChange={onChangeValueHandler}
                onBlur={(e) => minLength(e, 3, setErrors, formValues)}
              />
              <label
                className={styles["user-label"]}
                htmlFor="register-username"
              >
                Username{" "}
              </label>
            </div>

            {errors.username && (
              <p>Username must be at least 3 characters long!</p>
            )}

            <div className={styles["input-group"]}>
              <input
                type="text"
                name="email"
                id="register-email"
                autoComplete="off"
                required={true}
                className={styles["input"]}
                value={formValues.email}
                onChange={onChangeValueHandler}
                onBlur={(e) => emailValidator(e, setErrors, formValues)}
              />
              <label className={styles["user-label"]} htmlFor="register-email">
                Email{" "}
              </label>
            </div>

            {errors.email && <p>Email must be valid!</p>}

            <div className={styles["input-group"]}>
              <input
                className={styles["input"]}
                type="password"
                name="password"
                id="register-password"
                autoComplete="off"
                required={true}
                value={formValues.password}
                onChange={onChangeValueHandler}
                onBlur={(e) => minLength(e, 5, setErrors, formValues)}
              />
              <label
                className={styles["user-label"]}
                htmlFor="register-password"
              >
                Password{" "}
              </label>
            </div>

            {errors.password && (
              <p>Password must be at least 5 characters long!</p>
            )}

            <div className={styles["input-group"]}>
              <input
                type="password"
                name="rePass"
                id="repeat-password"
                autoComplete="off"
                required={true}
                className={styles["input"]}
                value={formValues.rePass}
                onChange={onChangeValueHandler}
                onBlur={(e) => passwordsMatch(e, setErrors, formValues)}
              />
              <label className={styles["user-label"]} htmlFor="repeat-password">
                Confirm Password{" "}
              </label>
            </div>

            {errors.rePass && (
              <p data-testid="register-rePass-error">Passwords don't match!</p>
            )}

            <SubmitButton
              invalidForm={invalidForm}
              isLoading={isLoading}
              buttonText="SIGN IN"
            />
            <p>
              Already registered?{" "}
              <Link className={styles["link"]} to="/auth/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>

      <RightBottomSvg />
    </section>
  );
}

export default Register;
