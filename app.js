const express = require("express");
const https = require("https");

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Yonkers&appid=1c4cdcce8878d7e83f7cef5765e50362&units=imperial";

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      console.log(temp);
      console.log(weatherDescription);

      // const object = {
      //   name: "Daniel",
      //   favoriteFood: "Pizza",
      // };
      // console.log(JSON.stringify(object));

      res.write(`<p>The weather is currently ${weatherDescription}</p>`);
      res.write(
        `<h1>The temperature in Yonkers is ${temp} degrees Fahrenheit</h1>`
      );
      res.write(`<img src="${imageURL}">`);
      res.send();
    });
  });
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
