import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const authorizeLink =
  "https://www.strava.com/oauth/authorize?client_id=79186&redirect_uri=http://localhost:3000&response_type=code&scope=activity:read_all";
const GetAuthorize = async () => {
  window.location.href("google");
};

export default GetAuthorize;
