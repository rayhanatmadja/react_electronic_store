const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// PAYMENT
router.get("/payment", (req, res) => {
  stripe.charges.create(
    {
      amount: req.body.amount,
      tokenId: req.body.tokenId,
      currency: "idr",
    },
    (err, res) => {
      if (err) {
        res.status(402).json(err);
      } else {
        res.status(200).json("Payment succesfull");
      }
    }
  );
});
