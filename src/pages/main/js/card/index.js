import { giveInfoItems } from "../common";
import { CardModal } from "./card-modal";
import { generateCards } from "./add-card";

export async function addCardClickHandler() {
  let items = await giveInfoItems();
  document
    .querySelector(".filter-container")
    .addEventListener("click", (event) => {
      if (event.target.closest(".card")) {
        generateCardModal(
          getClickedData(items, event.target.closest(".card").id)
        );
        event.target.closest(".card").classList.add("active-card");
      }
    });
}

function getClickedData(items, id) {
  return items.find((item) => item.id.toLowerCase() === id.toLowerCase());
}
const generateCardModal = (data) => {
  let cardModal = new CardModal("modal", data);
  cardModal.renderCardModal();
  setTimeout(() => {
    cardModal.openModal();
  }, 1);
};

export async function addCard() {
  const items = await giveInfoItems();
  let containerCard = document.querySelector(".filter-container");
  containerCard.remove();
  let portfolios = document.querySelector(".portfolios__wrapper");
  portfolios.append(generateCards(items));
}
