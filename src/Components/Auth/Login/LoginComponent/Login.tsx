import React, { FormEvent, useContext, useState } from "react";

import styles from "../Styles/login.module.css";

import { AuthContext } from "Contexts/AuthContext";
import { login } from "Services/authService";
import { IUser } from "Types/User.type";
import { UserDTO } from "Types/UserDTO.type";
import { emailValidator, minLength } from "Utils/Validators";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LeftTopSvg from "Components/Shared/Svg/LeftTopSvg/LeftTopSvg";
import RightBottomSvg from "Components/Shared/Svg/RightBottomSvg/RightBottomSvg";
import HeadAndError from "Components/Forms/Header/HeadAndError";
import SubmitButton from "Components/Forms/SubmitButton/SubmitButton";

function Login() {
  const authContext = useContext(AuthContext);
  let currentUserLoginHandler!: (arg0: IUser) => void;
  if (authContext) {
    currentUserLoginHandler = authContext.currentUserLoginHandler;
  }

  const [isLoading, setIsLoading] = useState(false);

  const navigateTo = useNavigate();

  const [error, setError] = useState("");

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const onChangeValueHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const invalidForm =
    Object.values(formValues).some((x) => x === "") ||
    Object.values(errors).some((x) => x);

  const onSubmitHandler = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setIsLoading(true);

    const userData: UserDTO = {
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };

    try {
      const user = await login(userData);
      currentUserLoginHandler(user);
      setIsLoading(false);
      navigateTo("/");
    } catch (err: Error | any) {
      const error = err.response.data.message;
      setError(error);
      setIsLoading(false);
    }
  };

  return (
    <section className={styles["login-container"]}>
      <LeftTopSvg />

      <div className={styles["login-wrapper"]}>
        <HeadAndError title="LOGIN" error={error} />

        <form onSubmit={onSubmitHandler}>
          <div className={styles["input-group"]}>
            <input
              className={styles["input"]}
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              required={true}
              value={formValues.email}
              onChange={onChangeValueHandler}
              onBlur={(e) => emailValidator(e, setErrors, formValues)}
            />
            <label htmlFor="email" className={styles["user-label"]}>
              Email:{" "}
            </label>
          </div>
          {errors.email && <p>Email must be valid!</p>}

          <div className={styles["input-group"]}>
            <input
              className={styles["input"]}
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              required={true}
              value={formValues.password}
              onChange={onChangeValueHandler}
              onBlur={(e) => minLength(e, 5, setErrors, formValues)}
            />
            <label htmlFor="password" className={styles["user-label"]}>
              Password:
            </label>
          </div>
          {errors.password && <p>Password must be at least 5 characters!</p>}

          <SubmitButton
            invalidForm={invalidForm}
            isLoading={isLoading}
            buttonText="LOG IN"
          />
          <p>
            Not registered?{" "}
            <Link className={styles["link"]} to="/auth/register">
              Register
            </Link>
          </p>
        </form>
      </div>

      <RightBottomSvg />
    </section>
  );
}

export default Login;
