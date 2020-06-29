import React from "react";
import { Route, Switch } from "react-router-dom";
import AirlinesList from "./Airlines/AirlinesList";
import Airline from "./Airline/Airline";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={AirlinesList} />
      <Route path="/:slug" component={Airline} />
    </Switch>
  );
};

export default App;
