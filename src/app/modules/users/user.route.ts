import express, { Router } from "express";

import { UserController } from "./user.controller";

const router = express.Router();

router.post("/signup", UserController.createUser);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getSingleUser);
router.get("/login", UserController.loginUser);

export const UserRoute = router;
