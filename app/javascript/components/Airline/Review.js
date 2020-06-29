import React from "react";
import "../../../assets/stylesheets/Review.css";

const Review = (props) => {
  const { title, description, score } = props;
  return (
    <div className="review">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="ratings">{score}</div>
    </div>
  );
};

export default Review;
