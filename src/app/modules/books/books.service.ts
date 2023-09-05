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

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateSingleBook,
};
