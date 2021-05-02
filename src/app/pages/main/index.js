import { mainHTML } from './main';
import {
  menuClickHandler,
  parallaxMoveHandler,
  filterCardHandler,
  onScrollHandler,
  addCardClickHandler,
  onScrollAnimationHandler,
  addCard,
  addCertificateClickHandler,
} from '../../../app';

export function mainPage(rootDiv) {
  rootDiv.innerHTML = mainHTML;
  addCard();
  menuClickHandler();
  parallaxMoveHandler();
  filterCardHandler();
  onScrollHandler();
  onScrollAnimationHandler();
  addCardClickHandler();
  addCertificateClickHandler();
}
