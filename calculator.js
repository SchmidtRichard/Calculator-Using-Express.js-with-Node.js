//Require express in the calculator application
const express = require("express");

const app = express();

//Create a root route get method with app.get()
app.get("/", function(request, response) {
  response.send("I am a calculator");
});

//Spin up the server on port 3000 with app.listen
app.listen(3000, function() {
  console.log("server started on port 3000 🚀");
});