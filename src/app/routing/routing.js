import { mainPage, projectPage } from "../pages";

export default class Route {
  constructor() {
    this.isMain = false;
  }

  routing() {
    let rootDiv = document.getElementById("root");
    const path = window.location.pathname.slice(1);
    switch (path) {
      case "": {
        if (!this.isMain) {
          mainPage(rootDiv, this.routing.bind(this));
        }
        this.isMain = true;
        break;
      }
      case "index.html":
        if (!this.isMain) {
          mainPage(rootDiv, this.routing.bind(this));
        }
        this.isMain = true;
        break;
      default: {
        projectPage(rootDiv, path, this.routing.bind(this));
        this.isMain = false;
      }
    }
  }
}
