const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyAdminAuth,
} = require("./verifyToken");
const OrderModel = require("../schema/OrderSchema");

// CREATE ORDER
router.post("/create", verifyToken, async (req, res) => {
  const newOrder = new OrderModel(req.body);
  try {
    const addedOrder = await newOrder.save();
    res.status(200).json(addedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL ORDERS
router.get("/", verifyAdminAuth, async (req, res) => {
  try {
    const allOrders = await OrderModel.find();
    res.status(200).json(allOrders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER ORDER
router.get("/find/:userId", verifyAdminAuth, async (req, res) => {
  try {
    const userOrder = await OrderModel.find({ userId: req.params.userId });
    res.status(200).json(userOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
