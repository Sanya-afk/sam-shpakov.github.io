export function parallaxCardHandler(element) {
  element.onmousemove = transformElement(element, element.children[0]);
  element.onmouseenter = handleMouseEnter(element.children[0]);
  element.onmouseleave = handleMouseLeave(element.children[0]);
}

function transformElement(elementOne, elementTwo) {
  let myPanel = elementOne;
  let subpanel = elementTwo;

  let prefix = '';
  if (navigator.userAgent.indexOf('Edg') != -1) {
    prefix = '-webkit-';
  } else if (navigator.userAgent.indexOf('YaBrowser') != -1) {
    prefix = '-webkit-';
  } else if (navigator.userAgent.indexOf('Firefox') != -1) {
    prefix = '-moz-';
  } else if (navigator.userAgent.indexOf('Chrome') != -1) {
    prefix = '-webkit-';
  } else {
    prefix = '';
  }

  if (prefix === '') {
    return;
  }

  return function (mouseEvent) {
    let mouseX, mouseY;
    let transformAmount = 5;

    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;

    const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
    const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

    const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
    const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

    subpanel.style.transform =
      'perspective(400px) rotateY(' +
      percentX * transformAmount +
      'deg) rotateX(' +
      percentY * transformAmount +
      'deg)  scale(1.2)';

  };
}
function handleMouseEnter(element) {
  let subpanel = element;
  return function () {
    setTimeout(() => {
      subpanel.style.transition = '';
    }, 200);
    subpanel.style.transition = 'transform .2s ease-out';
    subpanel.style.zIndex = '2';
  };
}

function handleMouseLeave(element) {
  let subpanel = element;
  return function () {
    subpanel.style.transition = 'transform 0.2s';
    setTimeout(() => {
      subpanel.style.transition = '';
    }, 200);

    subpanel.style.transform =
      'perspective(400px) rotateY(0deg) rotateX(0deg) scale(1)';
    subpanel.style.zIndex = '1';
  };
}
