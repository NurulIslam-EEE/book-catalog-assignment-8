import { Request, Response } from "express";
import httpStatus from "http-status";
import { BookService } from "./books.service";

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
  try {
    const result = await BookService.getAllBooks();

    res.status(200).send({
      success: true,
      statusCode: 200,
      message: "Books fetched successfully!",
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
};
