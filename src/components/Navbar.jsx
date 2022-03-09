import React from "react";
import styles from "../styles/Navbar.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCodeToken } from "../actions/actions";

const Navbar = ({ error }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const handleClick = async () => {
    window.location.assign(
      "https://www.strava.com/oauth/authorize?client_id=79186&redirect_uri=http://localhost:3000&response_type=code&scope=activity:read_all"
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.navbarTitle}>FurtherSport</h1>
      </div>
      <div className={styles.item}>
        {error && <span> Error</span>}
        <button className={styles.navbarButton} onClick={handleClick}>
          Log in with Strava account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
