import express, { Router } from "express";

import { CategoryController } from "./category.controller";

const router = express.Router();

router.post("/create-category", CategoryController.createCategory);

export const CategoryRoute = router;
