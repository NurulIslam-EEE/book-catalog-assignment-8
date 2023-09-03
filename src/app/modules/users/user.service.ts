import { PrismaClient, Users } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (data: Users): Promise<Users> => {
  const result = await prisma.users.create({ data });

  return result;
};

export const UserService = {
  createUser,
};
