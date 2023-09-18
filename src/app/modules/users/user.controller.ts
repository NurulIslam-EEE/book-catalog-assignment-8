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

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUser(req.params.id);

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "User getched successfully",
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

// update user
const updateUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.updateUser(req.params.id, req.body);

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "User updated successfully",
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

// delete user

const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.deleteUser(req.params.id);

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "User deleted successfully",
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

const loginUser = async (req: Request, res: Response) => {
  // console.log("body", req.body);
  try {
    const result = await UserService.loginUser(req.body);
    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "Login successfully!",
      data: result,
    });
  } catch (err) {
    res.status(200).send({
      success: false,
      statusCode: 400,
      message: err,
    });
  }
};

const getUserprofile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUserprofile(req?.user?.id);

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "User getched successfully",
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
  loginUser,
  getSingleUser,
  updateUser,
  deleteUser,
  getUserprofile,
};
