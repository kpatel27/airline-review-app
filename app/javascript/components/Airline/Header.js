import React from "react";
import "../../../assets/stylesheets/Header.css";

const Header = (props) => {
  const { name, image_url } = props.attributes;

  return (
    <div className="header">
      <img src={image_url} alt={name} width="50" />
      <h1>{name}</h1>
    </div>
  );
};

export default Header;
