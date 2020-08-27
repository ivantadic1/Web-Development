const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const { query } = require("express");

app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res) {
res.sendFile(__dirname + "/index.html");

const query = req.body.cityName;
const appid = "0804ebcd2d1701b5109175604fbfd51c";
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query +"&units=metric&appid= " + appid;

  https.get(url, function(response) {
    console.log(response);
    response.on("data", function(data) {
    const weatherData = JSON.parse(data)
    const temp = weatherData.main.temp
    const weatherDescription = weatherData.weather[0].description

    const icon = weatherData.weather[0].icon
    const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

    
    res.write("<p>Temperatura: " + temp + " stupanja.</p>");
    res.write("<p>Opis vremena: " + weatherDescription + ".</p>");
    res.write("<img src=" + imgURL +">");
    res.send();
    
    })

  })

})
app.listen("3000", function() {
  console.log("govno je upaljeno");
  
  
})
