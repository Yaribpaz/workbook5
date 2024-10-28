"use strict";

let numbers = [7, 9, 64, 60, 12, 13, 65, 62];

function isOver60(arrayValue) {
  if (arrayValue > 60) {
    return true;
  } else {
    return false;
  }
}

let firstValueOver60 = numbers.find(isOver60)
console.log(firstValueOver60);
