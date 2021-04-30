import { giveInfoItems } from "../common";

export async function addProject() {
  const items = await giveInfoItems();
  let containerCard = document.querySelector("#root");
  console.log(items, containerCard);
  // containerCard.remove();
  // let portfolios = document.querySelector(".portfolios__wrapper");
  // portfolios.append(generateCards(items));
}
