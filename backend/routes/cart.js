const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyAdminAuth,
} = require("./verifyToken");
const CartModel = require("../schema/CartSchema");

// CREATE CART
router.post("/create", verifyToken, async (req, res) => {
  const newCart = new CartModel(req.body);
  try {
    const cart = await newCart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL CART
router.get("/", verifyAdminAuth, async (req, res) => {
  try {
    const allCarts = await CartModel.find();
    res.status(200).json(allCarts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER CART BY ID
router.get("/find/:userId", verifyAdminAuth, async (req, res) => {
  try {
    const userCart = await CartModel.findOne({ userId: req.params.id });
    res.status(200).json(userCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE CART
router.put("/update/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    const updatedCart = await CartModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(`Succesfully Update : ${updatedCart}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE CART
router.delete("/delete/:id", verifyTokenAndAuth, async (req, res) => {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart sucsesfully deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
