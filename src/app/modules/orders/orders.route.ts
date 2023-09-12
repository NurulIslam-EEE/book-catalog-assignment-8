import express, { Router } from "express";

import { OrdersController } from "./orderes.controller";
import auth from "../../middleWares/auth";

const router = express.Router();

router.post("/create-order", auth("customer"), OrdersController.createOrder);
router.get("/", auth("admin"), OrdersController.getAlOrder);
router.get("/:id", auth("admin", "customer"), OrdersController.getSingleOrder);

export const OrdersRoute = router;
