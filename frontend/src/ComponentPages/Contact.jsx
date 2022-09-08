import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Contact</h1>
      <button onClick={handleClick}>Go Back!</button>
    </>
  );
}
