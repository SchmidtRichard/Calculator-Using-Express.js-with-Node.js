//Require express in the calculator application
const express = require("express");

//Require body-parser
const bodyParser = require("body-parser");

const app = express();

//Get the app to use body-parser
//urlencoded used when trying to parse data coming from a HTML form
app.use(bodyParser.urlencoded({
  extended: true //allows to post nested objects - body-parse requires it to be explicitled declared even if not usuing the extended: true
}));

//Create a root route get method with app.get()
app.get("/", function(request, response) {
  //API - res.sendFile(path [, options] [, fn])
  //Transfers the file to the brownser when they make a GET request
  response.sendFile(__dirname + "/index.html");

  //console.log(__dirname);
});

//Process POST requests
app.post("/", function(request, response) {

  //Calculate
  var num1 = Number(request.body.n1);
  var num2 = Number(request.body.n2);
  var result = num1 + num2;

  //Show what have been entered in the form
  console.log(request.body);
  console.log(request.body.n1);
  console.log(request.body.n2);

  response.send("The result of the calculation is " + result);
});

/*
npm install body-parser
Process and send the result back - Install body
Allow to parse the info we get sent from the POST request so we
have access to properties and variables so we can do our calculation
*/



//Spin up the server on port 3000 with app.listen
app.listen(3000, function() {
  console.log("server started on port 3000 🚀");
});