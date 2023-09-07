import { Category, Order, Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createOrder = async (data: Order): Promise<Order> => {
  const jsonData = data.orderedBooks as Prisma.JsonArray;
  const result = await prisma.order.create({
    data: {
      userId: data.userId,
      orderedBooks: jsonData,
    },
  });

  return result;
};

export const OrderService = {
  createOrder,
};
