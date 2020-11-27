import { Modal } from "../modal";

export class CardModal extends Modal {
  constructor(
    classes,
    { id, time, demo, img, description, category, code, stack }
  ) {
    super(classes);
    this.id = id;
    this.time = time;
    this.demo = demo;
    this.img = img;
    this.description = description;
    this.category = category;
    this.code = code;
    this.stack = stack;
  }

  generateContentCardModal() {
    this.content = super.createDomNode(this.modal, "div", "card-modal-content");
    this.body = super.createDomNode(this.modal, "div", "card-modal-body");
    this.imgCardModal = super.createDomNode(
      this.imgCardModal,
      "img",
      "card-modal-img"
    );
    this.imgCardModal.src = this.img;
    this.imgCardModal.alt = this.id;

    this.infoCardModal = super.createDomNode(
      this.infoCardModal,
      "div",
      "card-modal-info"
    );

    this.infoTitle = super.createDomNode(this.infoTitle, "h3", "info-title");
    this.infoTitle.innerHTML = this.id;

    this.buttonsModal = super.createDomNode(
      this.buttonsModal,
      "div",
      "buttons_modal"
    );

    this.infoDemo = super.createDomNode(this.infoDemo, "a", "button_primary");
    this.infoDemo.innerHTML = `LIVE DEMO`;
    this.infoDemo.href = this.demo;

    this.infoCode = super.createDomNode(this.infoCode, "a", "button_primary");
    this.infoCode.innerHTML = `CODE`;
    this.infoCode.href = this.code;

    this.infoParagraph = super.createDomNode(
      this.infoParagraph,
      "h5",
      "info-paragraph"
    );
    this.infoParagraph.innerHTML = this.description;

    this.infoList = super.createDomNode(this.infoList, "ul", "info-list");
    this.infoList.innerHTML = `<li><h5>Development time: <span>${
      this.time
    }</span></h5></li>
    <li><h5>Category: <span>${this.category}</span></h5></li>
    <li><h5>Tech stack: <span>${this.stack.join(", ")}</span></h5></li>`;
    this.appendCardModalElement();
    return this.content;
  }

  closeModal() {
    super.closeModal();
    document.querySelectorAll(".card").forEach((element) => {
      element.classList.remove("active-card");
    });
  }

  appendCardModalElement() {
    this.content.append(this.infoTitle);
    this.content.append(this.body);
    this.body.append(this.imgCardModal);
    this.body.append(this.infoCardModal);
    this.infoCardModal.append(this.infoList);
    this.infoCardModal.append(this.buttonsModal);
    this.buttonsModal.append(this.infoDemo);
    this.buttonsModal.append(this.infoCode);
    this.infoCardModal.append(this.infoParagraph);
  }

  renderCardModal() {
    let content = this.generateContentCardModal();
    super.createModal(content);
  }
}
