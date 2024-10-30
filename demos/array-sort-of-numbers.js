"use strict";

const randomNumbers = [298, 754, 855, 413, 579, 932, 533, 64, 464, 344, 65, 636, 439, 903, 606, 205, 971, 743, 623];

randomNumbers.sort(function (a, b) {
//   return a - b;
  //OR LONG VERSION
    if (a < b) return -1; //A negative value indicates that a should come before b.    //xx right order
    else if (a == b) return 0; //zero or NaN indicates that a and b are considered equal. //xx same values
    else return 1; //A positive value indicates that a should come after b.  //xx swap, wrong order
});

randomNumbers.sort((a, b) => a - b);

console.log(randomNumbers);