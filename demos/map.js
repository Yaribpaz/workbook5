"use strict";

let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];


//array of string that represent the fullname of a kid
let kidNames = kids.map(function(kid){
return kid.first + " " + kid.last;
});

console.log(kidNames);
