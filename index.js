const { apiKey } = require("./key");
const finnhub = require("finnhub");

const getStockPrice = () => {
  const api_key = finnhub.ApiClient.instance.authentications["api_key"];
  api_key.apiKey = apiKey;
  const finnhubClient = new finnhub.DefaultApi();

  finnhubClient.quote("AAPL", (error, data, response) => {
    console.log("Apple stock data:", data);
  });
};

getStockPrice();
