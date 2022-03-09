import React from "react";
import styles from "../styles/Landing.module.css";
import { ReactComponent as LandingImage } from "../images/runningSvg.svg";
const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <LandingImage />
      </div>

      <div className={styles.right}>
        <h1 className={styles.landingText}>
          Take your activities from Strava, see your account and more
        </h1>
      </div>
    </div>
  );
};

export default Landing;
