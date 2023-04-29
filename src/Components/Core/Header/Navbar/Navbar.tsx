import React, { useContext } from "react";

import styles from "./styles/navbar.module.css";

import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "Contexts/AuthContext";
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
      <div>
        <NavLink to={"/"}>{homeIcon}</NavLink>
      </div>
      <div>
        <NavLink to={"/auth/login"}>Log in</NavLink>
        <NavLink to={"/auth/register"}>Sign in</NavLink>
      </div>
      {/* <Link to={"/auth/logout"}>{logOutIcon}</Link> */}
    </nav>
  );
};
