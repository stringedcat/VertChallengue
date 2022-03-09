import React, { useState, useEffect } from "react";

const Dashboard = ({ user }) => {
  const [Activities, setActivities] = useState([]);
  const getActivities = async () => {
    const auth_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${user.access_token}`;
    fetch(auth_link)
      .then((res) => res.json())
      .then((data) => setActivities(data));
  };

  useEffect(() => {
    console.log(user);
    getActivities();
    console.log(Activities);
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
