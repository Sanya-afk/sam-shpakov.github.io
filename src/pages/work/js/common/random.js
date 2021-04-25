export function giveRandomArray(prevArrayNumbers, count, min, max) {
  let arrayRandom = [];
  let sessionNumber;
  for (let index = 0; index < count; ) {
    sessionNumber = randomInteger(min, max);
    if (
      arrayRandom.find((item) => item === sessionNumber) === undefined &&
      prevArrayNumbers.find((item) => item === sessionNumber) === undefined
    ) {
      arrayRandom.push(sessionNumber);
      index++;
    }
  }
  return arrayRandom;
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
