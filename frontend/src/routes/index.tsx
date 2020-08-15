import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "../pages";

import { Layout } from "../components";

export function Routes() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={() => <Home />} />
      </Switch>
    </Layout>
  );
}
