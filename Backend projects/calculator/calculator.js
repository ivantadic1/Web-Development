const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});


app.get("/bmicalclulator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.weight);

  var bmindex = weight / (height * height);
console.log(bmindex);
  res.send("BMI je = " + bmindex);
});


app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
console.log(result);
  res.send("zboj je = " + result);
});

app.listen("3000", function(){
  console.log("govno spojeno");
})
