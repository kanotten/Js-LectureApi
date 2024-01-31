// fetch("catfact.ninja/facts", function(response) => {
//   console.log(response);
// });
// Use callbacks to fix process dilemmas

fetch("https://catfact.ninja/facts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
