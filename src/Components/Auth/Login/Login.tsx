import { AuthContext } from "Contexts/AuthContext";
import { login } from "Services/authService";
import { IUser } from "Types/User.type";
import { UserDTO } from "Types/UserDTO.type";
import { emailValidator, minLength } from "Utils/Validators";
import React, { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>Login</h2>

      {error && <div>{error}</div>}

      <form onSubmit={onSubmitHandler}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          data-testid="login-email"
          value={formValues.email}
          onChange={onChangeValueHandler}
          onBlur={(e) => emailValidator(e, setErrors, formValues)}
        />

        {errors.email && <p>Email must be valid!</p>}

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          data-testid="login-password"
          value={formValues.password}
          onChange={onChangeValueHandler}
          onBlur={(e) => minLength(e, 5, setErrors, formValues)}
        />

        {errors.password && (
          <p data-testid="login-error-password">
            Password must be at least 5 characters long!
          </p>
        )}

        <button type="submit" disabled={invalidForm || isLoading}>
          {isLoading ? "Loading..." : "LOGIN"}
        </button>
        <p>
          Not registered? <Link to="/auth/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
