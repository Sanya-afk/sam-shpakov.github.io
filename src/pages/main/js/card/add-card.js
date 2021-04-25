import { parallaxCardHandler } from '../index';

export function generateCards(items) {
  const cards = createDomNode(cards, 'div', 'filter-container');
  items.forEach((element) => {
    let item = createDomNode(item, 'a', 'filter-item', 'active-item');
    item.dataset.category = element.category;
    item.href = '/work.html';

    let card = createDomNode(card, 'div', 'card');
    card.id = element.id;
    item.append(card);

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
    bindEvents(item);
    cards.append(item);
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
