import { generateProject } from './add-project';

export function addProject(project, rootDiv) {
  rootDiv.append(generateProject(project));
}
