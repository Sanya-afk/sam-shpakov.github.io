import Route from "./app";

const app = new Route();
window.onload = () => {
  app.routing();
};

window.onpopstate = () => {
  app.routing();
};
