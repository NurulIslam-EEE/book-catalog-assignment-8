import { Book, PrismaClient } from "@prisma/client";
import { IGenericResponse } from "../../../interfaces/genaricResponse";
import { IPaginationOptions } from "./books.consts";

const prisma = new PrismaClient();

const createBook = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({ data });

  return result;
};

const getAllBooks = async (
  paginationData: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {
  const result = await prisma.book.findMany({
    skip: paginationData.skip,
    take: paginationData.size,
    include: {
      category: true,
    },
  });

  const total = await prisma.book.count();
  const page = total / (paginationData.size || 1);
  console.log("tttt", total);

  return {
    meta: {
      page: paginationData.page || 1,
      size: paginationData?.size || 1,
      total: total,
      totalPage: page,
    },
    data: result,
  };
};

const getSingleBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id: id,
    },
    include: {
      category: true,
    },
  });

  return result;
};

const updateSingleBook = async (
  id: string,
  data: Partial<Book>
): Promise<Book | null> => {
  const result = await prisma.book.update({
    where: {
      id: id,
    },
    data: data,
  });

  return result;
};

const deleteSingleBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.delete({
    where: {
      id: id,
    },
  });

  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  deleteSingleBook,
  updateSingleBook,
};
