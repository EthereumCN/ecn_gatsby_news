const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const WEBHOOK_RECEIVE_ENDPOINT = "/webhook-receive";

app.get(WEBHOOK_RECEIVE_ENDPOINT, (request, response) => {
  const { url } = request;

  console.log("Received webhook request to /webhook-receive");
  console.log("Full URL: " + url);
  console.log("get");



  response.send({
    message: "Received GET request. start to build. Please wait.",
  });
  
    const shell = require("shelljs");
  //you need little improvisation
  shell.exec("./deploy.command");
  
  
});

app.post(WEBHOOK_RECEIVE_ENDPOINT, (request, response) => {
  const { body } = request;

  console.log("Received webhook request to /webhook-receive");
  console.log("Request body:");
  console.log("post");
  console.log(body);


  response.send({
    message: "Received POST request. Check the console for more info",
  });



});

app.put(WEBHOOK_RECEIVE_ENDPOINT, (request, response) => {
  const { body } = request;

  console.log("Received webhook request to /webhook-receive");
  console.log("Request body: ");
  console.log(body);

  response.send({
    message: "Received PUT request. Check the console for more info",
  });
});

app.delete(WEBHOOK_RECEIVE_ENDPOINT, (request, response) => {
  const { url } = request;

  console.log("Received webhook request to /webhook-receive");
  console.log("Full URL: " + url);

  response.send({
    message: "Received DELETE request. Check the console for more info",
  });
});

app.listen(port, () => {
  console.log(
    `Polyglot webhook example server listening at http://localhost:${port}`
  );
});
