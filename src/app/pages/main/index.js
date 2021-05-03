import { mainHTML } from "./main";
import {
  menuClickHandler,
  parallaxMoveHandler,
  filterCardHandler,
  onScrollHandler,
  addCardClickHandler,
  onScrollAnimationHandler,
  addCards,
  addCertificateClickHandler,
} from "../../../app";

export function mainPage(rootDiv) {
  rootDiv.innerHTML = mainHTML;
  addCards();
  addCardClickHandler();
  menuClickHandler();
  parallaxMoveHandler();
  filterCardHandler();
  onScrollHandler();
  onScrollAnimationHandler();
  addCertificateClickHandler();
}
