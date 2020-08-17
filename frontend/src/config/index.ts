export let BASE_API = "http://localhost:3000";

const environment = process.env.REACT_APP_ENV;
console.log(`Environment: ${environment}`);

if (environment === "production") {
  BASE_API = "http://localhost:3000";
}
