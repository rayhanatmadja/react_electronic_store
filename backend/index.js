const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 8080;
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const authRouter = require("./routes/login_regis_auth");

dotenv.config();

// db config & checking
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Db Connected");
  })
  .catch(err => {
    console.log(err);
  });

// using json file format
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.listen(process.env.PORT || port, () => {
  console.log(`Backend running on port : ${port}`);
});
