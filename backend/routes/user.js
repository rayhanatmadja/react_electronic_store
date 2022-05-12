const express = require("express");
const router = express.Router();

router.get("/getuser", (req, res) => {
  res.send("Get user succesfull");
});

router.post("/postuser", (req, res) => {
  const username = req.body.username;
  res.send(`User added : ${username}`);
});

module.exports = router;
