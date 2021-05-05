export function generateProject(project) {
  const projectDiv = createDomNode(projectDiv, "div", "project");

  const infoTitle = createDomNode(
    infoTitle,
    "div",
    "project-title",
    "anim-items"
  );
  infoTitle.innerHTML = project.id;
  projectDiv.append(infoTitle);

  const body = createDomNode(body, "div", "project-body");
  let imgCardModal = createDomNode(
    imgCardModal,
    "img",
    "project-img",
    "anim-items"
  );
  imgCardModal.src = project.img;
  imgCardModal.alt = project.id;
  body.append(imgCardModal);

  let infoCardModal = createDomNode(
    imgCardModal,
    "div",
    "project-info",
    "anim-items"
  );
  body.append(infoCardModal);

  let infoList = createDomNode(infoList, "ul", "info-list");
  infoList.innerHTML = `<li><h5>Development time: <span>${
    project.time
  }</span></h5></li>
    <li><h5>Category: <span>${project.category}</span></h5></li>
    <li><h5>Tech stack: <span>${project.stack.join(", ")}</span></h5></li>`;
  infoCardModal.append(infoList);

  let infoParagraph = createDomNode(infoParagraph, "h5", "info-paragraph");
  infoParagraph.innerHTML = project.description;
  infoCardModal.append(infoParagraph);

  const buttonsModal = createDomNode(buttonsModal, "div", "buttons_modal");
  let infoDemo = createDomNode(infoDemo, "a", "button_primary");
  infoDemo.innerHTML = `LIVE DEMO`;
  infoDemo.href = project.demo;
  buttonsModal.append(infoDemo);

  let infoCode = createDomNode(infoCode, "a", "button_primary");
  infoCode.innerHTML = `CODE`;
  infoCode.href = project.code;

  buttonsModal.append(infoCode);
  infoCardModal.append(buttonsModal);

  projectDiv.append(body);

  return projectDiv;
}

function createDomNode(node, element, ...classes) {
  node = document.createElement(element);
  node.classList.add(...classes);
  return node;
}
