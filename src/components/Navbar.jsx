import React, { useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCodeToken } from "../actions/actions";

const Navbar = ({ error, user }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const handleClick = () => {
    window.localStorage.setItem("alreadyLog", "true");
    window.location.assign(
      "https://www.strava.com/oauth/authorize?client_id=79186&redirect_uri=http://localhost:3000&response_type=code&scope=activity:read_all"
    );
  };

  useEffect(() => {});

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.navbarTitle}>FurtherSport</h1>
      </div>
      <div className={styles.item}>
        {error && <span> Error</span>}
        {user ? (
          <>
            <h2>{user.athlete.firstname}</h2>
            <h2>{user.athlete.lastname}</h2>
          </>
        ) : (
          <button className={styles.navbarButton} onClick={handleClick}>
            Log in with Strava account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
