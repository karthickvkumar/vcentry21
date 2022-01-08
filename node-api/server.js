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
    age : 24,
    id : 1
  },
  {
    name : "Mr.Xyz",
    age : 25,
    id : 2
  },
];

app.get("/api/user/list", (request, response) => {
  response.status(200).send(userRecord);
});

app.post("/api/user/create", (request, response) => {
  const username = request.body.name;
  const userage = request.body.age;
  const uniqueId = userRecord.length + 1;

  const newUser = {
    name : username,
    age : userage,
    id : uniqueId
  }

  userRecord.push(newUser);
  response.status(200).send("Successfully Created a New User");
});

app.put("/api/user/edit", (request, response) => {

});


const port = process.env.PORT || 8080;
http.listen(port, () => {
  console.log("Node JS Server is running on Port 8080");
});
