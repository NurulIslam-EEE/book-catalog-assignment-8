import express, { Router } from "express";

import { CategoryController } from "./category.controller";

const router = express.Router();

router.post("/create-category", CategoryController.createCategory);
router.get("/", CategoryController.getAllCategory);
router.get("/:id", CategoryController.getSingleCategory);
router.patch("/:id", CategoryController.updateSingleCategory);
router.delete("/:id", CategoryController.deleteSingleCategory);

export const CategoryRoute = router;
