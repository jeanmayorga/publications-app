import React from "react";
import { BrowserRouter } from "react-router-dom";
import { withTheme, ThemeProvider } from "emotion-theming";
import { css, Global } from "@emotion/core";

import { Routes } from "./routes";

import { theme, Theme } from "./utils";

import "antd/dist/antd.css";

const makeGlobalStyles = (theme: Theme) => css`
  body {
    background: ${theme.colors.gray};
  }
`;

const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
));

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
