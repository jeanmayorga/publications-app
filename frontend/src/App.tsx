import React from "react";

import { Provider } from "react-redux";
import { store } from "./store";

import { BrowserRouter, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { Routes } from "./routes";

import { withTheme, ThemeProvider } from "emotion-theming";
import { css, Global } from "@emotion/core";
import { theme, Theme } from "./utils";

import "antd/dist/antd.css";

const makeGlobalStyles = (theme: Theme) => css`
  body {
    background: ${theme.colors.gray};
  }
  @media (min-width: 992px) {
    body {
      padding-top: 2em;
    }
  }
`;

const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
));

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <QueryParamProvider ReactRouterRoute={Route}>
            <Routes />
          </QueryParamProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
