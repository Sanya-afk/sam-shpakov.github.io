import { mainPage, projectPage } from "../pages";

export default class Route {
  constructor() {
    this.isMain = false;
  }

  routing() {
    let rootDiv = document.getElementById("root");
    console.log(this.isMain);
    const path = window.location.pathname.slice(1);

    switch (path) {
      case "": {
        if (!this.isMain) {
          mainPage(rootDiv);
        }
        this.isMain = true;
        break;
      }
      case "index.html":
        if (!this.isMain) {
          mainPage(rootDiv);
        }
        this.isMain = true;
        break;
      default: {
        projectPage(rootDiv, path);
        this.isMain = false;
      }
    }
  }
}
