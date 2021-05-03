import { routing } from "../../routing";

export function menuClickHandler() {
  const elem = document.querySelector(".header__menu");

  if (elem) {
    elem.addEventListener("click", (event) => {
      changeHeaderLogo();

      if (isBlurMenu(event)) {
        closeMenu();
      }
      if (isClickOnMenuItem(event)) {
        closeMenu();
        clickOnMenuItem(event);
      }
    });
  }
}

export function logoClickHandler() {
  const elem = document.querySelector(".header__logo");
  if (elem) {
    elem.addEventListener("click", () => {
      onLogoClick();
    });
  }
}

const onLogoClick = () => {
  window.history.pushState({}, "", window.location.origin);
  routing();
};

const clickOnMenuItem = (event) => {
  event.preventDefault();
  let element = event.target.closest("li");
  let elementToScroll = document.getElementById(
    element.querySelector("a").innerHTML
  );
  if (elementToScroll) {
    elementToScroll.scrollIntoView();
    window.history.pushState(
      {},
      `/#${element.querySelector("a").innerHTML}`,
      element.querySelector("a").href
    );
  } else {
    window.history.pushState(
      {},
      `/#${element.querySelector("a").innerHTML}`,
      element.querySelector("a").href
    );
    routing();
  }
};

const closeMenu = () => {
  document.getElementById("menu__toggle").checked = false;
  document.querySelector(".header_wrapper").classList.remove("open_menu");
};

const isBlurMenu = (event) => {
  return event.target.classList.contains("menu__container");
};

const changeHeaderLogo = () => {
  let isChecked = document.getElementById("menu__toggle").checked;
  if (isChecked) {
    document.querySelector(".header_wrapper").classList.add("open_menu");
  } else {
    document.querySelector(".header_wrapper").classList.remove("open_menu");
  }
};

const isClickOnMenuItem = (event) => {
  if (event.target.classList.length != 0) {
    const { classList, parentNode } = event.target;
    return (
      classList.length &&
      (classList.contains("navigation__item") ||
        parentNode.classList.contains("navigation__item"))
    );
  }
};
