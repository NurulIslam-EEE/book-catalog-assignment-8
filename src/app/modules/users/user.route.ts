import express, { Router } from "express";

import { UserController } from "./user.controller";
import auth from "../../middleWares/auth";

const router = express.Router();

// profile

router.get("/", auth("admin", "customer"), UserController.getUserprofile);

router.post("/signup", UserController.createUser);
router.get("/login", UserController.loginUser);
router.get("/", auth("admin"), UserController.getUsers);
router.get("/:id", auth("admin"), UserController.getSingleUser);
router.patch("/:id", auth("admin"), UserController.updateUser);
router.delete("/:id", auth("admin"), UserController.deleteUser);

export const UserRoute = router;
