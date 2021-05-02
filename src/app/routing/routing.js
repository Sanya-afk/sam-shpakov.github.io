import { mainPage, projectPage } from '../pages';

export function routing() {
  let rootDiv = document.getElementById('root');
  const path = window.location.pathname.slice(1);
  switch (path) {
    case '': {
      mainPage(rootDiv);
      break;
    }
    case 'index.html':
      mainPage(rootDiv);
      break;
    default: {
      projectPage(rootDiv, path);
    }
  }
}
