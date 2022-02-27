const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){console.log("Port 3000 Started");});

app.post("/", function(req, res){
  //console.log(req.body);
  // var num1 = req.body.num1;
  // var num2 = req.body.num2;
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send(`The result is ${result}`);// use `` instead of ''
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function(req, res){
  // res.send("<h1>BMI Calculator</h1>");

  // var weight = req.body.weight;
  // var height = req.body.height;
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var result = weight / (height * height);

  res.send(`Your BMI is ${result}`);
})
