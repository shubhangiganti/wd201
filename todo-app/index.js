const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("Hello World");
});

app.listen(3000, () => {
  console.log("Started express in server number 3000");
});
