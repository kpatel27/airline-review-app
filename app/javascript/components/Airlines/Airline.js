import React from "react";
import { Link } from "react-router-dom";

const Airline = (props) => {
  const { name, image_url, slug } = props.attributes;
  return (
    <div className="card">
      <div className="logo">
        <img src={image_url} alt={name} width="50" />
      </div>
      <div className="airline-name">{name}</div>
      <div className="review-link">
        <Link to={`/${slug}`}>View {name} Reviews</Link>
      </div>
    </div>
  );
};

export default Airline;
