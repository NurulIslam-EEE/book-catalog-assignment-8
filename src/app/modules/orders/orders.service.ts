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

const getAllOrder = async (): Promise<Order[]> => {
  const result = await prisma.order.findMany();

  return result;
};

const getSingleOrder = async (
  id: string,
  role: string,
  userId: string
): Promise<Order | null> => {
  console.log("iiiiii", id, role);

  let result;
  if ((role = "customer")) {
    result = await prisma.order.findUnique({
      where: {
        id: id,
        userId: userId,
      },
    });
  } else {
    result = await prisma.order.findUnique({
      where: {
        id: id,
      },
    });
  }

  return result;
};

export const OrderService = {
  createOrder,
  getAllOrder,
  getSingleOrder,
};
