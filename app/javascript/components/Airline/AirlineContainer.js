import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Review from "./Review";
import "../../../assets/stylesheets/AirlineContainer.css";

class AirlineContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      airline: {},
      review: {},
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
          loaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let reviews;
    if (this.state.airline.included) {
      reviews = this.state.airline.included.map((review, idx) => {
        return (
          <Review
            key={idx}
            title={review.attributes.title}
            description={review.attributes.description}
            score={review.attributes.score}
          />
        );
      });
    }

    return (
      <div>
        <div className="column">
          {this.state.loaded && (
            <Header attributes={this.state.airline.data.attributes} />
          )}
          {reviews}
        </div>
        <div className="column">[new review form will go here]</div>
      </div>
    );
  }
}

export default AirlineContainer;
