import React from "react";
import { Route, Switch } from "react-router-dom";

import { Home, PublicationPage, Publications } from "../pages";

import { Layout } from "../components";
import { AuthorPage } from "../pages/Author";
import styled from "../utils/styled";

const TopperStyled = styled.div`
  background: ${({ theme }) => theme.colors.blue};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  z-index: -1;
`;

export function Routes() {
  return (
    <>
      <TopperStyled />
      <Layout>
        <Switch>
          <Route
            exact
            path="/authors/:authorId"
            component={() => <AuthorPage />}
          />
          <Route
            exact
            path="/publications"
            component={() => <Publications />}
          />
          <Route
            exact
            path="/publication/:publicationId"
            component={() => <PublicationPage />}
          />
          <Route component={() => <Home />} />
        </Switch>
      </Layout>
    </>
  );
}
