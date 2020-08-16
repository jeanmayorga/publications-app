import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home, PublicationPage, Publications, Authors } from "../pages";

import { Layout } from "../components";
import { AuthorPage } from "../pages/Author";

export function Routes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/authors" component={() => <Authors />} />
        <Route
          exact
          path="/authors/:authorId"
          component={() => <AuthorPage />}
        />
        <Route exact path="/publications" component={() => <Publications />} />
        <Route
          exact
          path="/publication/:publicationId"
          component={() => <PublicationPage />}
        />
        <Route component={() => <Home />} />
      </Switch>
    </Layout>
  );
}
