import auth from "../../middleWares/auth";
import { AuthController } from "./auth.controller";
import express, { Router } from "express";

const router = express.Router();

// profile

router.get("/", auth("admin", "customer"), AuthController.getUserprofile);

export const AuthRoute = router;
