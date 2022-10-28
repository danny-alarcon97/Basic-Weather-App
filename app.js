const express = require("express");
const https = require("https");

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=London&appid=1c4cdcce8878d7e83f7cef5765e50362&units=metric";
  https.get(url, function (response) {
    console.log(response);
  });

  res.send(`Server is up and running`);
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
