import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json({
    products,
    categories: ["Electronics", "Clothing", "Shoes", "Toys"],
  });
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Fetch products from array of ids
// @route   POST /api/products/ids
// @access  Public
const getProductsByIds = asyncHandler(async (req, res) => {
  if (!req.body.ids) {
    res.status(400);
    throw new Error("No ids provided");
  }
  const products = await Product.find({ _id: { $in: req.body.ids } });
  res.json(products);
});

export { getProducts, getSingleProduct, getProductsByIds };
