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
        let airline = response.data.data;
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
    return (
      <div>
        <div className="column">
          {this.state.loaded && (
            <Header attributes={this.state.airline.attributes} />
          )}
          <Review />
        </div>
        <div className="column">[new review form will go here]</div>
      </div>
    );
  }
}

export default AirlineContainer;
