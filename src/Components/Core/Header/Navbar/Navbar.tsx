import React, { useContext } from "react";

import styles from "./styles/navbar.module.css";

import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "Contexts/AuthContext";
import Logo from "../Logo/Logo";
const homeIcon = <FontAwesomeIcon icon={faHome} />;
const logOutIcon = <FontAwesomeIcon icon={faDoorOpen} />;

export const Navbar = () => {
  const authContext = useContext(AuthContext);
  const currentUser = authContext?.currentUser;

  console.log(currentUser);

  // const setActiveStyle = ({ isActive }) => {
  //   return isActive ? styles["active"] : "none";
  // };

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["logo"]}>
        <Logo />
      </div>
      <div className={styles["links"]}>
        <NavLink className={styles["link"]} to={"/"}>
          {homeIcon}
        </NavLink>
        <NavLink className={styles["link"]} to={"/auth/login"}>
          Log in
        </NavLink>
        <NavLink className={styles["link"]} to={"/auth/register"}>
          Sign in
        </NavLink>
        <Link className={styles["link"]} to={"/auth/logout"}>
          {logOutIcon}
        </Link>
      </div>
    </nav>
  );
};
