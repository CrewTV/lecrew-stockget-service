const { apiKey } = require("./key");
const finnhub = require("finnhub");
const express = require("express");
const cors = require("cors");

// Create an express app
const app = express();

app.use(cors({ origin: "*" }));

// Default endpoint
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Endpoint to retrieve stock price
app.get("/stockPrice", (req, res) => {
  const api_key = finnhub.ApiClient.instance.authentications["api_key"];
  api_key.apiKey = apiKey;
  const finnhubClient = new finnhub.DefaultApi();
  finnhubClient.quote("AAPL", (error, data, response) => {
    res.json(data);
  });
});

// Sart the express app
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Hello world listening on port", port);
});
