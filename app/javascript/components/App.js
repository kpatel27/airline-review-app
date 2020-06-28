import React from "react";
import { Route, Switch } from "react-router-dom";
import Airlines from "./Airlines/Airlines";
import Airline from "./Airline/Airline";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Airlines} />
      <Route path="/:slug" component={Airline} />
    </Switch>
  );
};

export default App;
