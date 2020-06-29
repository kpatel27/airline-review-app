import React from "react";
import "../../../assets/stylesheets/Rating.css";

const Rating = (props) => {
  const score = props.score;
  const scorePercent = (score / 5) * 100;

  return (
    <span className="rating-wrapper">
      <span className="rating" style={{ width: `${scorePercent}%` }}></span>
    </span>
  );
};

export default Rating;
