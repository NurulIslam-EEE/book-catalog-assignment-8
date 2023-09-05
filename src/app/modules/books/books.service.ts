import { Book, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBook = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({ data });

  return result;
};

const getAllBooks = async (): Promise<Book[]> => {
  const result = await prisma.book.findMany({
    include: {
      category: true,
    },
  });

  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
};
