const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

let users = [];

app.post("/users/create", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send(newUser);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
