import { Category, Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCategory = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({ data });

  return result;
};

const getAllCategory = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany();

  return result;
};

const getSingleCategory = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id: id,
    },
  });

  return result;
};

export const CategoryService = {
  createCategory,
  getAllCategory,
  getSingleCategory,
};
