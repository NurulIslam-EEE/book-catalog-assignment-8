import { PrismaClient, Users } from "@prisma/client";

const prisma = new PrismaClient();

const getUserprofile = async (userId: string): Promise<Users | null> => {
  const result = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });

  return result;
};

export const AuthService = {
  getUserprofile,
};
