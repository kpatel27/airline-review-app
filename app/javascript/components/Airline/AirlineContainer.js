import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import "../../../assets/stylesheets/AirlineContainer.css";

class AirlineContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      airline: {},
      reviews: [],
      loaded: false,
    };
  }

  componentDidMount() {
    axios
      .get(`/api/v1/airlines/${this.props.match.params.slug}`)
      .then((response) => {
        let airline = response.data;
        this.setState({
          airline: airline,
          reviews: airline.included,
          loaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleFormSubmit = (review) => {
    const airline_id = this.state.airline.data.id;
    axios
      .post("/api/v1/reviews", { ...review, airline_id })
      .then((response) => {
        const reviews = [...this.state.airline.included, response.data.data];
        this.setState({ ...this.state.airline, reviews });
      })
      .catch((err) => console.log(err));
  };

  render() {
    let reviews = this.state.reviews.map((review, idx) => {
      return (
        <Review
          key={idx}
          title={review.attributes.title}
          description={review.attributes.description}
          score={review.attributes.score}
        />
      );
    });

    return (
      <div>
        <div className="column">
          {this.state.loaded && (
            <Header attributes={this.state.airline.data.attributes} />
          )}
          {reviews}
        </div>
        <div className="column">
          {this.state.loaded && (
            <ReviewForm
              name={this.state.airline.data.attributes.name}
              onFormSubmit={this.handleFormSubmit}
            />
          )}
        </div>
      </div>
    );
  }
}

export default AirlineContainer;
