import { parallaxCardHandler } from '../../index';

export function generateCards(items) {
  const cards = createDomNode(cards, 'div', 'filter-container');
  items.forEach((element) => {
    let card = createDomNode(card, 'div', 'card', 'filter-item', 'active-item');
    card.id = element.id;
    card.dataset.category = element.category;

    let title = createDomNode(title, 'div', 'card__title');
    title.innerHTML = 'Click for detail';
    card.append(title);

    let imageContainer = createDomNode(imageContainer, 'div', 'card__image');
    card.append(imageContainer);

    let image = createDomNode(imageContainer, 'img');
    image.src = element.img;
    imageContainer.append(image);

    let name = createDomNode(name, 'div', 'card__name');
    name.innerHTML = element.id;
    card.append(name);
    bindEvents(card);
    cards.append(card);
  });

  return cards;
}

function bindEvents(node) {
  parallaxCardHandler(node);
}

function createDomNode(node, element, ...classes) {
  node = document.createElement(element);
  node.classList.add(...classes);
  return node;
}
