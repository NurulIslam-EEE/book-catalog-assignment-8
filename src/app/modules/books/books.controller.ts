import { Request, Response } from "express";
import httpStatus from "http-status";
import { BookService } from "./books.service";
import pick from "../../../shared/pick";
import { paginationHelpers } from "../../../helpers/paginationHelpers";

const createBook = async (req: Request, res: Response) => {
  try {
    const result = await BookService.createBook(req.body);

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "Book created successfully!",
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

const getAllBook = async (req: Request, res: Response) => {
  type AnyObject = { [key: string]: any };
  const lowercaseKeys = (obj: AnyObject, deep = false) =>
    Object.keys(obj).reduce((acc, key) => {
      acc[key.toLowerCase()] =
        deep && typeof obj[key] === "object"
          ? lowercaseKeys(obj[key])
          : obj[key];
      return acc;
    }, {} as AnyObject);

  const lowerCaseQuery = lowercaseKeys(req.query);

  const filters = pick(lowerCaseQuery, [
    "minprice",
    "maxprice",
    "category",
    "searchterm",
  ]);

  const paginationOptions = pick(lowerCaseQuery, [
    "page",
    "limit",
    "size",
    "sortby",
    "sortorder",
  ]);

  const pagination = paginationHelpers.calculatePagination(paginationOptions);

  console.log("lllllll", filters);
  try {
    const result = await BookService.getAllBooks(filters, pagination);

    res.status(200).send({
      success: true,
      statusCode: 200,

      message: "Books fetched successfully!",
      meta: result.meta,
      data: result.data,
    });
  } catch (err) {
    res.send({
      success: false,

      statusCode: httpStatus.BAD_REQUEST,
      data: err,
    });
  }
};

const getSingleBook = async (req: Request, res: Response) => {
  try {
    const result = await BookService.getSingleBook(req.params.id);

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "Book fetched successfully!",
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

const updateSingleBook = async (req: Request, res: Response) => {
  try {
    const result = await BookService.updateSingleBook(req.params.id, req.body);

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "Book updated successfully!",
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

const deleteSingleBook = async (req: Request, res: Response) => {
  try {
    const result = await BookService.deleteSingleBook(req.params.id);

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "Book is deleted successfully!",
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

export const BookController = {
  createBook,
  getAllBook,
  getSingleBook,
  updateSingleBook,
  deleteSingleBook,
};
