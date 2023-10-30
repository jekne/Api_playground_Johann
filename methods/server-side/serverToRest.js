const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

const apiKey = "939curfsgahx";
const apiSecret =
  "r9537738d5tkbqk9em427fcbudsmy2sq43cvnby7mxxmqrashxdru7d28nkc5nwf";

const serverClient = axios.create({
  baseURL: "https://chat-us-east-1.stream-io-api.com/",
  headers: {
    Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString(
      "base64"
    )}`,
    "Content-Type": "application/json",
  },
});

app.get("/channels/:userId", async (req, res) => {
  const userId = req.params.userId;
  const response = await serverClient.get(`/channels?members=${userId}`);
  const channels = response.data.channels;
  res.json({ channels });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
