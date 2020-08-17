import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthorItem } from "./AuthorItem";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../../utils";

const sampleAuthor = {
  id: 0,
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@gmail.com",
  birthDay: "2020-08-17T20:23:51.736Z",
};

test("should render one Author Item", () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Router>
        <AuthorItem author={sampleAuthor} />
      </Router>
    </ThemeProvider>
  );
  const linkElement = getByText(/John Doe/i);
  expect(linkElement).toBeInTheDocument();
});
