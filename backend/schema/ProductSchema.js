const { Schema, default: mongoose } = require("mongoose");
const boolean = require("webidl-conversions");

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: true,
      required: true,
    },
    prize: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductSchema", ProductSchema);
