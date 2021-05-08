import { giveInfoItems } from '../../common';
import { generateCards } from './add-card';
import { onScrollHandler } from '../../controls';

export async function addCardClickHandler(routing) {
  await giveInfoItems();
  const elem = document.querySelector('.filter-container');
  if (elem) {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.closest('.card')) {
        onCardItemClick(`/${event.target.closest('.card').id}`, routing);
      }
    });
  }
}

const onCardItemClick = (pathName, routing) => {
  window.history.pushState({}, pathName, window.location.origin + pathName);
  routing();
};

export async function addCards() {
  const items = await giveInfoItems();
  let containerCard = document.querySelector('.filter-container');
  containerCard.remove();
  let portfolio = document.querySelector('.portfolio__wrapper');
  portfolio.append(generateCards(items));
  onScrollHandler();
}
