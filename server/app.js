const express = require("express");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World! XD");
})

app.listen(port, () => {
  console.log(`Puzzle app listening on port ${port}`);;
})

app.post("/users", (req, res) => {
  // Get the information from the sign up form
  const { username, email, password } = req.body;

  // Process the information and save it to the database

  // Send a response back to the frontend
  res.send("User created successfully");
});