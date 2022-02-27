const express = require("express");
const https = require('https');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");

  res.send("Server is up and running.")
})

app.listen(1000, function(){
  console.log("Server is running on port 3000");
})

app.post("/", function(req, res){
  const place = req.body.cityName;
  const apiKey = "66a7c3104ce2d25714d285e75e790a56";
  // const type =
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}`;

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const disc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon

      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      console.log(temp);
      console.log(disc);
      res.write(`<h1>The weather int ${place} is currently ${disc}</h1>`);
      res.write(`<h1>The temperature of ${place} is ${temp}</h1>`);
      res.write(`<img src = ${imageURL}>`);
      res.send();
    })
  })

  console.log("post request got");
})
