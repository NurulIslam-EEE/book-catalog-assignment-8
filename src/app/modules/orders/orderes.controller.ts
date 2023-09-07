import { Request, Response } from "express";
import httpStatus from "http-status";
import { OrderService } from "./orders.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.createOrder(req.body);

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "Category created successfully!",
      data: result,
    });
  } catch (err) {
    res.send({
      success: false,
      statusCode: httpStatus.BAD_REQUEST,
      data: err,
    });
  }
};

export const OrdersController = { createOrder };