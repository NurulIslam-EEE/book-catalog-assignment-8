import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createOrder = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({ data });

  return result;
};

export const OrderService = {
  createOrder,
};
