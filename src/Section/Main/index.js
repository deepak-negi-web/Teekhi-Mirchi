import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, ContactPage } from "../../views";
const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" exact component={ContactPage} />
      </Switch>
    </main>
  );
};
export default Main;
