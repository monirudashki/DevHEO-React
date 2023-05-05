import React, { memo } from "react";

import styles from "./headAndError.module.css";

import { HeadAndErrorProps } from "./HeadAndError.type";

function HeadAndError({ title, error }: HeadAndErrorProps) {
  return (
    <div className={styles["header-error"]}>
      <div className={styles["head"]}>
        <h2>{title}</h2>
      </div>

      {error && (
        <div className={styles["error"]}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default memo(HeadAndError);
