import Route from "./app";

const app = new Route();
window.onload = () => {
  app.routing();
};

window.onpopstate = () => {
  console.log("onpopstate");
  app.routing();
};

window.onhashchange = () => {
  console.log("onhashchange");
  app.routing();
};
