import { PrismaClient, Users } from "@prisma/client";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import config from "../../../config";
import { Secret } from "jsonwebtoken";

const prisma = new PrismaClient();

const createUser = async (data: Users): Promise<Users> => {
  const result = await prisma.users.create({ data });

  return result;
};

const getAllUser = async (): Promise<Users[]> => {
  const result = await prisma.users.findMany({});

  return result;
};
const getSingleUser = async (userId: string): Promise<Users | null> => {
  const result = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });

  return result;
};

// update user

const updateUser = async (
  userId: string,
  data: Partial<Users>
): Promise<Users> => {
  const result = await prisma.users.update({
    where: {
      id: userId,
    },
    data: data,
  });

  return result;
};

// delete user
const deleteUser = async (userId: string): Promise<Users> => {
  const result = await prisma.users.delete({
    where: {
      id: userId,
    },
  });

  return result;
};
// login user
const loginUser = async (loginData: {
  contactNo: string;
  password: string;
}) => {
  const { contactNo, password } = loginData;
  if (!contactNo || !password) {
    throw new ApiError(400, "Please provide phone number and password");
  }

  const isUserExist = await prisma.users.findUnique({
    where: {
      contactNo: contactNo,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist");
  }

  const matchPassword = password === isUserExist.password;

  console.log("exists", isUserExist, matchPassword);

  if (!matchPassword) {
    throw new ApiError(httpStatus.NOT_FOUND, "Password is incorrect");
  }

  const { id, role } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { id, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { id, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

// user profile

const getUserprofile = async (userId: string): Promise<Users | null> => {
  const result = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });

  return result;
};

export const UserService = {
  createUser,
  getAllUser,
  getSingleUser,
  loginUser,
  updateUser,
  deleteUser,
  getUserprofile,
};
