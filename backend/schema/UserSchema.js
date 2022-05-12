const { Schema, default: mongoose } = require("mongoose");
const boolean = require("webidl-conversions");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserSchema", UserSchema);
