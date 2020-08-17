export let BASE_API = "http://localhost:3000";

export const environment = process.env.REACT_APP_ENV ?? "production";
console.log(`Environment: ${environment}`);

if (environment === "production") {
  BASE_API = "https://publications-app.herokuapp.com";
}
