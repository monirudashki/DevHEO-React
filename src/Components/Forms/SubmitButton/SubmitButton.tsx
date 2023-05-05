import React, { memo } from "react";

import styles from "./SubmitButton.module.css";

import { SubmitButtonProps } from "./SubmitButton.type";

function SubmitButton({
  invalidForm,
  isLoading,
  buttonText,
}: SubmitButtonProps) {
  return (
    <button
      className={styles["button"]}
      type="submit"
      disabled={invalidForm || isLoading}
    >
      {isLoading ? "Loading..." : buttonText}
    </button>
  );
}

export default memo(SubmitButton);
