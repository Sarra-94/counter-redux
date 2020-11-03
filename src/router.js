import React from "react";
import App from "./App";
import About from "./about";
import { Switch, Route } from "react-router-dom";
function Router() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about/:id" component={About} />
      </Switch>
    </div>
  );
}

export default Router;
