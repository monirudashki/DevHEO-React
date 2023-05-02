import React from "react";

import styles from "../styles/home.module.css";

const developerImg = require("../images/developer-image.jpg");
const devSkills = require("../images/dev-skills2.jpg");

function Home() {
  return (
    <section className={styles["home-container"]}>
      <div className={styles["posts-container"]}></div>

      <div className={styles["info-container"]}>
        <article className={styles["about-site-wrapper"]}>
          <header>
            <h2>Developers help each other</h2>
          </header>
          <main>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper.
            </p>
          </main>
          <footer>
            <img src={developerImg} alt="developer" />
          </footer>
        </article>

        <article className={styles["about-skills-wrapper"]}>
          <header>
            <h2>Improve your skills</h2>
          </header>
          <main>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper.
            </p>
          </main>
          <footer>
            <img src={devSkills} alt="developer" />
          </footer>
        </article>
      </div>
    </section>
  );
}

export default Home;
