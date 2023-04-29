import React from "react";
import styles from "../Logo/styles/logo.module.css";

const logo = require("./Images/dev-logo.png");

const Logo = () => {
  return (
    <div className={styles["container-logo"]}>
      <p>Dev</p>
      <div>
        <img src={String(logo)} alt="logo" />
      </div>
      <p>HEO</p>
    </div>
  );
};

export default Logo;
