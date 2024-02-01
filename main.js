g; // fetch("catfact.ninja/facts", function(response) => {
//   console.log(response);
// });
// Use callbacks to fix process dilemmas
//
//

doSomething();
doSomethingExpr();

let doSomethingExpr = function () {
  console.log("something");
};

function doSomething() {
  console.log("something");
}

const catFactsContainer = document.getElementById("catFactsContainer");

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
// instead of hardcoding data, use APi. as Api/https has the same template always. so we know what we get without coding it.
// URL = unified resource locater

// fetch("https://catfact.ninja/facts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

// parameter = the url adress:("https://catfact.ninja/facts")
//
// fetch = function ( fetch is built in function)
//
// .then = method ( always after completion)
//
// ((response)) = not built in attribute, but is the name of the callback. when async is      // finished make the recieved respons do "this"
//
// ((data)) = is when the respons from fetch is stored in this case as a json.
// this converts whatever respons into data.
//
// .catch = function ( when all is synced/completed) catch "this" specific thing.
// in this case "catch" catches errors ( error is given name and not built in)
// it then consol.logs whatever errors it finds.

//fetch api and add to html document
// this call the api and adds it in the hmtl

// Display cat facts on the web page in the div

fetch("https://catfact.ninja/facts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    catFactsContainer.innerHTML = `<p>${data.data[0].fact}</p>`;
  })
  .catch((error) => console.error("Error:", error));
