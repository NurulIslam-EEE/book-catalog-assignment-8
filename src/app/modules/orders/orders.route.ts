import express, { Router } from "express";

import { OrdersController } from "./orderes.controller";

const router = express.Router();

router.post("/create-order", OrdersController.createOrder);

export const OrdersRoute = router;
