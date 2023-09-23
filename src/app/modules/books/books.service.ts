import { Book, Prisma, PrismaClient } from "@prisma/client";
import { IGenericResponse } from "../../../interfaces/genaricResponse";
import { IBookFiltersOptions, IPaginationOptions } from "./books.consts";

const prisma = new PrismaClient();

const createBook = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({ data });

  return result;
};

const getAllBooks = async (
  filter: IBookFiltersOptions,
  paginationData: IPaginationOptions
): Promise<IGenericResponse<Book[]>> => {
  const {} = paginationData;

  const { searchterm, ...filterData } = filter;

  console.log("ffff", filterData);

  const andCondition = [];

  if (searchterm) {
    andCondition.push({
      OR: ["title", "genre", "author"].map((field) => ({
        [field]: {
          contains: searchterm,
          mode: "insensitive",
        },
      })),
    });
  }
  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }
  const whereConditions: Prisma.BookWhereInput =
    andCondition.length > 0 ? { OR: andCondition } : {};
  const result = await prisma.book.findMany({
    where: whereConditions,
    skip: paginationData.skip,
    take: paginationData.size,
    include: {
      category: true,
    },
    orderBy:
      paginationData.sortBy && paginationData.sortOrder
        ? { [paginationData.sortBy]: paginationData.sortOrder }
        : { title: "desc" },
  });

  const total = await prisma.book.count();
  const page = total / (paginationData.size || 1);
  console.log("fff", filter);

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
  const result = await prisma.book.findFirst({
    where: {
      OR: [
        {
          id: id,
        },
        {
          categoryId: id,
        },
      ],
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
