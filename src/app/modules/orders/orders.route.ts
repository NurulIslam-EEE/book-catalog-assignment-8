import express, { Router } from "express";

import { OrdersController } from "./orderes.controller";
import auth from "../../middleWares/auth";

const router = express.Router();

router.post("/create-order", OrdersController.createOrder);
router.get("/", auth("admin"), OrdersController.getAlOrder);

export const OrdersRoute = router;
