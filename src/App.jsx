import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Navbar from "./components/Navbar.jsx";
import getAuthorize from "./apiCalls.js";
import { useDispatch, useSelector } from "react-redux";
import { getCodeToken } from "./actions/actions.js";
import axios from "axios";
const App = () => {
  const [user, setUser] = useState(null);
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  /*  const checkCode = async () => {
    if (code.includes("code")) {
      const access_code = code.slice(35, 74);
      console.log(access_code);
      try {
        const access_token = await axios.post(
          `https://www.strava.com/oauth/token?client_id=79186&client_secret=a0a56f59be536ea6b272ed10c2fc4cca4357d864&code=${access_code}&grant_type=authorization_code`
        );

        setUser(access_token);
      } catch (e) {
        console.log(e);
      }
    }
    setError(true);
  }; */

  const checkCode = async (url) => {
    const auth_link = "https://www.strava.com/oauth/token";
    if (url.includes("code")) {
      const access_code = url.slice(35, 75);
      console.log(access_code, "CODIGO DENTRO DE LA FUNCION");
      try {
        const access_token = await fetch(auth_link, {
          method: "post",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            client_id: "79186",
            client_secret: "a0a56f59be536ea6b272ed10c2fc4cca4357d864",
            code: access_code,
            grant_type: "authorization_code",
          }),
        });

        setUser(access_token);
        console.log(user);
      } catch (error) {
        console.log(error, "FALLO EL POST");
      }
    }
    setError(true);
  };
  useEffect(() => {
    /* checkCode(); */

    setUrl(window.location.href);
    console.log(url);
    checkCode(url);
  }, []);

  return (
    <BrowserRouter>
      <Navbar error={error} />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
