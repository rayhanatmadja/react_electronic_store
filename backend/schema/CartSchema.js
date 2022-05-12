const { Schema, default: mongoose } = require("mongoose");
const boolean = require("webidl-conversions");

const CartSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("CartSchema", CartSchema);
