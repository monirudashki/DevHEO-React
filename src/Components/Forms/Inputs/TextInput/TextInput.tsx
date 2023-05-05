import React from "react";
import { inputTextProps } from "./textInput.type";

import styles from "./styles/textInput.module.css";

function TextInput({
  labelName,
  errorMessage,
  name,
  formValues,
  onChangeValueHandler,
  setErrors,
  validator,
  errors,
}: inputTextProps) {
  return (
    <div className={styles["input-group"]}>
      <input
        className={styles["input"]}
        autoComplete="off"
        type="text"
        name={name}
        id={name}
        value={formValues.email}
        onChange={onChangeValueHandler}
        onBlur={(e) => validator(e, setErrors, formValues)}
      />
      <label className={styles["user-label"]} htmlFor={name}>
        {labelName}
      </label>

      {errors.email && <p>{errorMessage}</p>}
    </div>
  );
}

export default TextInput;
