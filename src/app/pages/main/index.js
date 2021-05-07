import { mainHTML } from "./main";
import {
  menuClickHandler,
  parallaxMoveHandler,
  filterCardHandler,
  addCardClickHandler,
  onScrollAnimationHandler,
  addCards,
  addCertificateClickHandler,
} from "../../../app";

export function mainPage(rootDiv, routing) {
  rootDiv.innerHTML = mainHTML;
  addCards();
  addCardClickHandler(routing);
  menuClickHandler(routing);
  parallaxMoveHandler();
  filterCardHandler();
  onScrollAnimationHandler();
  addCertificateClickHandler();
}
