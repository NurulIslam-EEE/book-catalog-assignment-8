import express, { Router } from "express";
import { BookController } from "./books.controller";
import auth from "../../middleWares/auth";

const router = express.Router();

router.post("/create-book", auth("admin"), BookController.createBook);
router.get("/", BookController.getAllBook);
router.get("/:id", BookController.getSingleBook);
router.patch("/:id", BookController.updateSingleBook);
router.delete("/:id", BookController.deleteSingleBook);
export const BookRoute = router;
