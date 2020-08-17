import { render } from "@testing-library/react";
import { BASE_API, environment } from ".";

test("should get correct api backend", () => {
  if (environment === "production") {
    expect(BASE_API).toBe("https://publications-app.herokuapp.com");
  }
});
