const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const http = require("http").createServer(app);

app.use(bodyParser.json());
app.use(cors({
  credentials : true,
  origin: '*'
}));
app.use(express.json());

let userRecord = [
  {
    name : "Mr.Abc",
    age : 24
  },
  {
    name : "Mr.Xyz",
    age : 25
  },
];

app.get("/api/user/list", (request, response) => {
  response.status(200).send(userRecord);
});


const port = process.env.PORT || 8080;
http.listen(port, () => {
  console.log("Node JS Server is running on Port 8080");
});
