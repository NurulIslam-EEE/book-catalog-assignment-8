"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const client_1 = require("@prisma/client");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const config_1 = __importDefault(require("../../../config"));
const prisma = new client_1.PrismaClient();
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.users.create({ data });
    return result;
});
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.users.findMany({});
    return result;
});
const getSingleUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.users.findUnique({
        where: {
            id: userId,
        },
    });
    return result;
});
// update user
const updateUser = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.users.update({
        where: {
            id: userId,
        },
        data: data,
    });
    return result;
});
// delete user
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.users.delete({
        where: {
            id: userId,
        },
    });
    return result;
});
// login user
const loginUser = (loginData) => __awaiter(void 0, void 0, void 0, function* () {
    const { contactNo, password } = loginData;
    if (!contactNo || !password) {
        throw new ApiError_1.default(400, "Please provide phone number and password");
    }
    const isUserExist = yield prisma.users.findUnique({
        where: {
            contactNo: contactNo,
        },
    });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User does not exist");
    }
    const matchPassword = password === isUserExist.password;
    console.log("exists", isUserExist, matchPassword);
    if (!matchPassword) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "Password is incorrect");
    }
    const { id, role } = isUserExist;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ id, role }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ id, role }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
exports.UserService = {
    createUser,
    getAllUser,
    getSingleUser,
    loginUser,
    updateUser,
    deleteUser,
};
