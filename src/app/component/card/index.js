import { giveInfoItems } from "../../common";
import { generateCards } from "./add-card";
import { routing } from "../../routing";
import { onScrollHandler } from "../../controls";

export async function addCardClickHandler() {
  await giveInfoItems();
  const elem = document.querySelector(".filter-container");
  if (elem) {
    elem.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.closest(".card")) {
        onCardItemClick(`/${event.target.closest(".card").id}`);
      }
    });
  }
}

const onCardItemClick = (pathName) => {
  window.location.hash = `#${pathName}`;
  window.history.pushState({}, pathName, window.location.origin + pathName);
};

export async function addCards() {
  const items = await giveInfoItems();
  let containerCard = document.querySelector(".filter-container");
  containerCard.remove();
  let portfolios = document.querySelector(".portfolios__wrapper");
  portfolios.append(generateCards(items));
  onScrollHandler();
}
