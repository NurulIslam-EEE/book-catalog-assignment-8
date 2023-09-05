import express, { Router } from "express";

import { CategoryController } from "./category.controller";

const router = express.Router();

router.post("/create-category", CategoryController.createCategory);
router.get("/", CategoryController.getAllCategory);

export const CategoryRoute = router;
