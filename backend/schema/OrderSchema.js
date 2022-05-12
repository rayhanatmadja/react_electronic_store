const { Schema, default: mongoose } = require("mongoose");
const boolean = require("webidl-conversions");

const OrderSchema = new Schema(
  {
    product: [
      {
        productId: {
          type: String,
          required: true,
          unique: true,
        },
        qty: {
          type: Number,
          required: true,
        },
      },
    ],
    userId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrderSchema", OrderSchema);
