"use strict";

let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];

//option 1 
kids.forEach(function (kid){
    console.log(kid.first);
    
})

//option 2
kids.forEach((kid) => console.log(kid.first));
