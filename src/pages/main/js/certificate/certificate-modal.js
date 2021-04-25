import { Modal } from '../modal';

export class CertificateModal extends Modal {
  constructor(classes, { id, date, certificate, img, category }) {
    super(classes);
    this.id = id;
    this.date = date;
    this.certificate = certificate;
    this.img = img;
    this.category = category;
  }

  generateContentCardModal() {
    this.content = super.createDomNode(this.modal, 'div', 'card-modal-content');
    this.body = super.createDomNode(this.modal, 'div', 'card-modal-body');
    this.imgCardModal = super.createDomNode(
      this.imgCardModal,
      'img',
      'card-modal-img'
    );
    this.imgCardModal.src = this.img;
    this.imgCardModal.alt = this.id;

    this.infoCardModal = super.createDomNode(
      this.infoCardModal,
      'div',
      'card-modal-info'
    );

    this.infoTitle = super.createDomNode(this.infoTitle, 'h3', 'info-title');
    this.infoTitle.innerHTML = 'Certificate';

    this.buttonsModal = super.createDomNode(
      this.buttonsModal,
      'div',
      'buttons_modal'
    );

    this.infoCertificate = super.createDomNode(
      this.infoCertificate,
      'a',
      'button_primary'
    );
    this.infoCertificate.innerHTML = `CERTIFICATE`;
    this.infoCertificate.href = this.certificate;

    this.infoList = super.createDomNode(this.infoList, 'ul', 'info-list');
    this.infoList.innerHTML = `<li><h5>Date: <span>${this.date}</span></h5></li>
    <li><h5>Category: <span>${this.category}</span></h5></li>`;
    this.appendCardModalElement();
    return this.content;
  }

  closeModal() {
    super.closeModal();
    document.querySelectorAll('.card').forEach((element) => {
      element.classList.remove('active-card');
    });
  }

  appendCardModalElement() {
    this.content.append(this.infoTitle);
    this.content.append(this.body);
    this.body.append(this.imgCardModal);
    this.body.append(this.infoCardModal);
    this.infoCardModal.append(this.infoList);
    this.infoCardModal.append(this.buttonsModal);
    this.buttonsModal.append(this.infoCertificate);
  }

  renderCardModal() {
    let content = this.generateContentCardModal();
    super.createModal(content);
  }
}
