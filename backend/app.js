const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/about", (req, res) => {
  let user = {
    name: "Peter",
    age: 33,
    hobby: "watching TV",
  };
  res.json(user);
});

app.listen(8080, () => console.log("Listening to port 8080"));
