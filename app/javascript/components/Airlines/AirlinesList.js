import React, { Component } from "react";
import axios from "axios";
import Airline from "./Airline";

class AirlinesList extends Component {
  constructor(props) {
    super(props);

    this.state = { airlines: [] };
  }

  componentDidMount() {
    axios
      .get("/api/v1/airlines")
      .then((response) => {
        this.setState({ airlines: response.data.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const grid = this.state.airlines.map((airline, idx) => {
      return <Airline key={idx} attributes={airline.attributes} />;
    });

    return (
      <div className="home">
        <div className="header">
          <h1>Airline Reviews</h1>
          <p className="subheader">Write your review of airlines</p>
        </div>
        <div className="grid">
          <ul>{grid}</ul>
        </div>
      </div>
    );
  }
}

export default AirlinesList;
