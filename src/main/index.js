import {
  menuClickHandler,
  parallaxMoveHandler,
  filterCardHandler,
  onScrollHandler,
  addCardClickHandler,
  onScrollAnimationHandler,
  addCard,
  addCertificateClickHandler,
  addCube,
} from "./js";

window.onload = () => {
  addCard();
  menuClickHandler();
  parallaxMoveHandler();
  filterCardHandler();
  onScrollHandler();
  onScrollAnimationHandler();
  addCardClickHandler();
  addCertificateClickHandler();
  addCube();
};
