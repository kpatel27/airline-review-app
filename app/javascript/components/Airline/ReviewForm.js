import React, { Component, Fragment } from "react";
import "../../../assets/stylesheets/RatingForm.css";
import axios from "axios";

class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      score: 0,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRatingChange = (e) => {
    let score = parseInt(e.target.value, 10);
    this.setState({ score: score });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <div className="review-headline">
            Add a Review for {this.props.name}!
          </div>
          <div>
            <input
              onChange={this.handleInputChange}
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
            />
          </div>
          <div>
            <textarea
              onChange={this.handleInputChange}
              type="text"
              name="description"
              placeholder="Description..."
              value={this.state.description}
            />
          </div>
          <div>
            <select
              name="rating"
              id="rating-select"
              onChange={this.handleRatingChange}
            >
              <option value="">Please choose a rating</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
