import express, { Router } from "express";

import { CategoryController } from "./category.controller";
import auth from "../../middleWares/auth";

const router = express.Router();

router.post(
  "/create-category",
  auth("admin"),
  CategoryController.createCategory
);
router.get("/", CategoryController.getAllCategory);
router.get("/:id", CategoryController.getSingleCategory);
router.patch("/:id", auth("admin"), CategoryController.updateSingleCategory);
router.delete("/:id", auth("admin"), CategoryController.deleteSingleCategory);

export const CategoryRoute = router;
