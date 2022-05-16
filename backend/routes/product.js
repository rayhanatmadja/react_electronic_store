const express = require("express");
const router = express.Router();
const {
  verifyToken,
  verifyTokenAndAuth,
  verifyAdminAuth,
} = require("./verifyToken");
const ProductModel = require("../schema/ProductSchema");

// CREATE NEW PRODUCT
router.post("/create", verifyAdminAuth, async (req, res) => {
  const newProduct = new ProductModel(req.body);

  try {
    const addedProduct = await newProduct.save();
    res.status(200).json(`Product added ${addedProduct}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL PRODUCTS
router.get("/", verifyAdminAuth, async (req, res) => {
  const returnNewestProducts = req.query.new;
  const returnLatestProducts = req.query.late;
  try {
    let products;

    if (returnNewestProducts) {
      products = await ProductModel.find().sort({ createdAt: -1 }).limit(1);
    } else if (returnLatestProducts) {
      products = await ProductModel.find()
        .sort({ createdAt: +1 })
        .limit(1);
    } else {
      products = await ProductModel.find();
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET PRODUCT
router.get("/find/:id", verifyAdminAuth, async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE PRODUCT
router.put("/update/:id", verifyAdminAuth, async (req, res) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(`Succesfully Update : ${updatedProduct}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE PRODUCT
router.delete("/delete/:id", verifyAdminAuth, async (req, res) => {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Product sucsesfully deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
