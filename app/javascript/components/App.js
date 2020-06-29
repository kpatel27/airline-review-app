import React from "react";
import { Route, Switch } from "react-router-dom";
import AirlinesList from "./Airlines/AirlinesList";
import AirlineContainer from "./Airline/AirlineContainer";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={AirlinesList} />
      <Route path="/:slug" component={AirlineContainer} />
    </Switch>
  );
};

export default App;
