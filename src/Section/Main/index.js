import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, ContactPage, ReservationPage } from "../../views";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/reservation" exact component={ReservationPage} />
      </Switch>
    </main>
  );
};
export default Main;
