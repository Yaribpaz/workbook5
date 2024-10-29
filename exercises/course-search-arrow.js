"use strict";

//Use this process:
//1. delete function keyword, add arrow after the argument list
//2. remove the name, make the function anonymous
//3. if function is one line then curly braces ({}) are not needed and the return keyword is implicit (automatic/assumed)
//to rewrite all examples below to use arrow functions
// Note: on the 4th example you will need to write it from scratch

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "49.00",
  },
];

//------------------------------------------------------------------------

//1. When does the PROG200 course start?

//create a function that takes a single object as a parameter and returns true or false based on a comparison
function isPROG200(course) {
  return course.CourseId == "PROG200";
}

//declare a variable to hold a single object that needs to be found in the array
//assign (=) into that single object the return value of the find function
//call the find function on the array and pass it the comparison function as the single parameter
let prog200Course = courses.find(isPROG200);
//after you get the object back, use dot notation to get to specific properties and print them out to the screen
console.log(prog200Course.StartDate);

//---------------------------------------------------------------------
// 2.  What is the title of the PROJ500 course?
function isPROJ500(course) {
  return course.CourseId === "PROJ500";
}

let proj500Course = courses.find(isPROJ500);
console.log(proj500Course.Title);

//------------------------------------------------------------------------
// 3. What are the titles of the courses that cost $50 or less? // What classes meet in "Classroom 1"?

//create a function that takes a single object as a parameter and returns true or false based on a comparison
function isInexpensive(course) {
  return Number(course.Fee) <= 50;
}

//declare a variable to hold an array of objects that meet the comparison
//assign (=) into that array the return value of the filter function
//call the filter function on the array and pass it the comparison function as the single parameter
let inexpensiveCourseTitles = courses.filter(isInexpensive);
console.log("Inexpensive course list: ", inexpensiveCourseTitles);

//------------------------------------------------------------------------
//4. What classes meet in "Classroom 1"?