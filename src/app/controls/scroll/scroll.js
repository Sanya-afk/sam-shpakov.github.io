export function onScrollHandler() {
  document.removeEventListener("scroll", onScroll);
  document.addEventListener("scroll", onScroll);
  const hash = window.location.hash.slice(1);
  if (hash === "" || hash === "about") {
    onScroll();
  } else {
    let element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView();
    }
  }
}

function onScroll() {
  const nav = document.querySelector("header").offsetHeight;
  const curPos = window.scrollY + nav + 80;
  const sections = document.querySelectorAll("#root>section");
  const links = document.querySelectorAll(".navigation__item");
  sections.forEach((el) => {
    if (el.offsetTop <= curPos && el.offsetTop + el.offsetHeight > curPos) {
      links.forEach((link) => {
        link.classList.remove("active");
        if (
          el.id ===
          link.querySelector(".navigation__item_link").innerHTML.toLowerCase()
        ) {
          link.classList.add("active");
          window.history.pushState(
            {},
            `/#${link.querySelector("a").innerHTML}`,
            link.querySelector("a").href
          );
        }
      });
    }
  });
}

export function onScrollAnimationHandler() {
  const animItems = document.querySelectorAll(".anim-items");
  setTimeout(() => {
    animOnScroll(animItems);
  }, 300);
  if (animItems.length > 0) {
    window.onscroll = () => animOnScroll(animItems);
  }
}

function animOnScroll(animItems) {
  for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;
    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if (
      pageYOffset > animItemOffset - animItemPoint &&
      pageYOffset < animItemOffset + animItemHeight
    ) {
      animItem.classList.add("anim-active");
    }
  }
}

function offset(element) {
  const rect = element.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
