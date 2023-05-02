import React from "react";

import styles from "../Styles/footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faEdge } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const github = <FontAwesomeIcon icon={faGithub} />;
const Edge = <FontAwesomeIcon icon={faEdge} />;
const mail = <FontAwesomeIcon icon={faEnvelope} />;

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-container__title"]}>
          <div>
            <p>
              Dev<span>HEO</span>
            </p>
          </div>
          <p>Let's help each other</p>
        </div>
        <div className={styles["footer-container__front-end"]}>
          <h3>Front-end</h3>
          <p>React</p>
          <p>Typescript</p>
          <p>CSS Animations</p>
          <p>SASS</p>
        </div>
        <div className={styles["footer-container__back-end"]}>
          <h3>Back-end</h3>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>Google Drive Cloud</p>
          <p>MongoDB</p>
        </div>
        <div className={styles["footer-container__links"]}>
          <div className={styles["icon"]}>
            <a className={styles["icon__href"]} href="#/">
              Simeon.rudashki@abv.bg
            </a>
            <div className={styles["mail"]}>{mail}</div>
          </div>
          <a href="https://github.com/monirudashki" className={styles["icon"]}>
            <p className={styles["icon__href"]}>MyProjects</p>
            <div className={styles["gitHub"]}>{github}</div>
          </a>
          <a
            href="https://cv-simeon-rudashki.herokuapp.com/"
            className={styles["icon"]}
          >
            <p className={styles["icon__href"]}>MyCV</p>
            <div className={styles["edge"]}>{Edge}</div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
