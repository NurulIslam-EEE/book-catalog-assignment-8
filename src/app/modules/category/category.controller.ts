import { Request, Response } from "express";
import httpStatus from "http-status";
import { CategoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.createCategory(req.body);

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

const getAllCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.getAllCategory();

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "Categories fetched successfully",
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

const getSingleCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.getSingleCategory(req.params.id);

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "Category fetched successfully",
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

export const CategoryController = {
  createCategory,
  getAllCategory,
  getSingleCategory,
};
