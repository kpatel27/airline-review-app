import React from "react";
import "../../../assets/stylesheets/Header.css";
import Rating from "../Rating/Rating";

const Header = (props) => {
  const { name, image_url, average_score } = props.attributes;
  return (
    <div className="header">
      <img src={image_url} alt={name} width="50" />
      <h1>{name}</h1>
      <Rating score={average_score} />
    </div>
  );
};

export default Header;
