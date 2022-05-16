const express = require("express");
const router = express.Router();
const UserModel = require("../schema/UserSchema");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new UserModel({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    // encrypt pw & confirmPw
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
    confirPw: CryptoJs.AES.encrypt(
      req.body.confirmPw,
      process.env.CONFIRM_PW_SECRET
    ).toString(),
  });

  // Save new user to db
  // Checking adding new user fail or not
  try {
    const addedUser = await newUser.save();
    return res.status(201).json(addedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // find user by username
    const user = await UserModel.findOne({ username: req.body.username });

    // auth login by username
    // !user && res.status(401).json("Wrong username");
    if (!user) {
      return res.status(401).json("Wrong username");
    }

    const hashPw = CryptoJs.AES.decrypt(user.password, process.env.PASS_SECRET);

    const normalPw = hashPw.toString(CryptoJs.enc.Utf8);

    // input username
    const password = req.body.password;

    // auth login by password
    // password != normalPw && res.status(401).json("Wrong password");
    if (password != normalPw) {
      return res.status(401).json("Wrong password");
    }

    // token acces using jsonwebtoken for more secure
    const tokenAccess = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ user, tokenAccess });
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
