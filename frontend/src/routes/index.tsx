import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home, Publication, Publications, Authors } from "../pages";

import { Layout } from "../components";

export function Routes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/authors" component={() => <Authors />} />
        <Route exact path="/publications" component={() => <Publications />} />
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
