import { Cube } from "./cube-dnd";

export function addCube() {
  let cube = new Cube({
    fps: 20,
    sensivity: 0.1,
    sensivityFade: 0.93,
    speed: 2,
    touchSensivity: 1.5,
  });
  document.querySelector("#wrapper-cube").append(cube.createCube());
}
