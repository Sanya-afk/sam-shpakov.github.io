export function onScrollHandler() {
  document.addEventListener('scroll', onScroll);
}

function onScroll() {
  const nav = document.querySelector('header').offsetHeight;
  const curPos = window.scrollY + nav;
  const sections = document.querySelectorAll('body>section');
  const links = document.querySelectorAll('.navigation__item');
  sections.forEach((el) => {
    if (el.offsetTop <= curPos && el.offsetTop + el.offsetHeight > curPos) {
      links.forEach((link) => {
        link.classList.remove('active');
        if (
          el.id ===
          link.querySelector('.navigation__item_link').innerHTML.toLowerCase()
        ) {
          link.classList.add('active');
        }
      });
    }
  });
}

export function onScrollAnimationHandler() {
  const animItems = document.querySelectorAll('.anim-items');
  setTimeout(() => {
    animOnScroll(animItems);
  }, 300);
  if (animItems.length > 0) {
    window.addEventListener('scroll', () => animOnScroll(animItems));
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
      animItem.classList.add('anim-active');
    }
  }
}

function offset(element) {
  const rect = element.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
