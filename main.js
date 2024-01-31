// fetch("catfact.ninja/facts", function(response) => {
//   console.log(response);
// });
// Use callbacks to fix process dilemmas

fetch("https://catfact.ninja/facts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// why do we need API´s ? use same pre-built Api´s to build diffirent applications.

//Data
//mostly store data in arrays or objects
let toDo1Name = "Learn JS functions";
let toDo1Done = true;
// old school programming, use objects instead of a lot of loose variables/Data
// Example - objects is cleaner and easier to use with consol.log to get specific data

let toDo1 = {
  name: false,
  checked: "somethingelse",
  unchecked: "something",
};
console.log(toDo1.name); // result = false, since the name of toDo1 is called false
