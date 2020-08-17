import { BASE_API, environment } from ".";

test("should get correct api backend", () => {
  if (environment === "production") {
    expect(BASE_API).toBe("https://publications-app.herokuapp.com");
  }
  if (environment === "development") {
    expect(BASE_API).toBe("http://localhost:3000");
  }
});
