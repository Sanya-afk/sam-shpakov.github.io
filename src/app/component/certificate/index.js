import { giveInfoCertificate } from "../../common";
import { CertificateModal } from "./certificate-modal";

export async function addCertificateClickHandler() {
  let items = await giveInfoCertificate();
  const elem = document.querySelectorAll(".certificate");
  if (elem.length !== 0) {
    elem.forEach((element) => {
      element.addEventListener("click", (event) => {
        if (event.target.closest(".certificate")) {
          generateCardModal(
            getClickedData(items, event.target.closest(".certificate").id)
          );
        }
      });
    });
  }
}

function getClickedData(items, id) {
  return items.find((item) => item.id.toLowerCase() === id.toLowerCase());
}
const generateCardModal = (data) => {
  let cardModal = new CertificateModal("modal", data);
  cardModal.renderCardModal();
  setTimeout(() => {
    cardModal.openModal();
  }, 1);
};
