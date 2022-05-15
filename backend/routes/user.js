const express = require("express");
const router = express.Router();
const { verifyToken, verifyTokenAndAuth } = require("./verifyToken");
const CryptoJs = require("crypto-js");
const UserModel = require("../schema/UserSchema");

router.put(":/id", verifyTokenAndAuth, async (req, res) => {
  const password = req.body.password;
  if (password) {
    // encrypt password
    password = CryptoJs.AES.encrypt(
      password,
      process.env.PASS_SECRET
    ).toString();
  }

  // update user(filter first by id)
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
