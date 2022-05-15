const { Schema, default: mongoose } = require("mongoose");

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
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserSchema", UserSchema);
