import express from "express";
import {
  getProducts,
  getProductsByIds,
  getSingleProduct,
} from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getSingleProduct);
router.route("/ids").post(getProductsByIds);

export default router;
