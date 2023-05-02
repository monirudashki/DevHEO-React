import React from "react";
import styles from "../Logo/styles/logo.module.css";

const logo = require("./Images/dev-logo.png");

const Logo = () => {
  return (
    <div className={styles["container-logo"]}>
      <p>Dev</p>
      <span>HEO</span>
    </div>
  );
};

export default Logo;
