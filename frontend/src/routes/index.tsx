import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home, Publication, Authors } from "../pages";

import { Layout } from "../components";

export function Routes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/authors" component={() => <Authors />} />
        <Route
          exact
          path="/publication/:id"
          component={() => <Publication />}
        />
        <Route component={() => <Home />} />
      </Switch>
    </Layout>
  );
}
