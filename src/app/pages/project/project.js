import { giveInfoItems } from '../../common';
import { header } from '../../layouts';
import {
  menuClickHandler,
  logoClickHandler,
  onScrollAnimationHandler,
} from '../../../app';
import { addProject } from '../../component/';

export async function projectPage(rootDiv, path) {
  rootDiv.innerHTML = header;
  let items = await giveInfoItems();
  const infoProject = items.find((item) => item.id === path);
  if (infoProject) {
    addProject(infoProject, rootDiv);
  }
  menuClickHandler();
  logoClickHandler();
  onScrollAnimationHandler();
}
