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

// UPDATE ORDER
router.put("/update/:id", verifyAdminAuth, async (req, res) => {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE ORDER
router.delete("/delete/:id", verifyAdminAuth, async (req, res) => {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Order deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MONTHLY INCOME
router.get("/income", verifyAdminAuth, async (req, res) => {
  const date = new Date();
  //   get last month from date
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  //   get 2 previous month from date
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await OrderModel.aggregate([
      {
        $match: { createdAt: { $gte: previousMonth } },
      },
      {
        $project: { month: { $month: "$createdAt" }, sales: "$amount" },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
