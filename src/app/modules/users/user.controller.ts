import { Request, Response } from "express";
import { UserService } from "./user.service";
import httpStatus from "http-status";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "User created successfully!",
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

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUser();

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "Users retrieved successfully!",
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

export const UserController = {
  createUser,
  getUsers,
};
