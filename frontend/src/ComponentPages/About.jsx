import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

export default function About() {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND}/about`).then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, []);

  return (
    <>
      <h1>About {user.name}</h1>
      <h2>Age: {user.age}</h2>
      <h2>Hobby: {user.hobby}</h2>
      <Outlet />
    </>
  );
}
