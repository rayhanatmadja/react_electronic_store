const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyAdminAuth,
} = require("./verifyToken");
const CryptoJs = require("crypto-js");
const UserModel = require("../schema/UserSchema");

// GET ALL USERS
router.get("/", verifyAdminAuth, async (req, res) => {
  const returnNewestUsers = req.query.new;
  try {
    const users = returnNewestUsers
      ? // return only 3 newest user added
        await UserModel.find().sort({ _id: -1 }).limit(3)
      : await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    return res.status(err);
  }
});

// GET USER
router.get("/find/:id", verifyAdminAuth, async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status.json(err);
  }
});

// UPDATE
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
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
    res.status(200).json(`Your data succesfully updated : ${updatedUser}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE USER
router.delete("/delete/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
