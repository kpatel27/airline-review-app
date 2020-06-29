import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/stylesheets/Airline.css";
import Rating from "../Rating/Rating";

const Airline = (props) => {
  const { name, image_url, slug, average_score } = props.attributes;
  return (
    <div className="card">
      <div className="logo">
        <img src={image_url} alt={name} width="50" />
      </div>
      <div className="airline-name">{name}</div>
      <Rating score={average_score} />
      <div className="review-link">
        <Link to={`/${slug}`}>View Reviews</Link>
      </div>
    </div>
  );
};

export default Airline;
