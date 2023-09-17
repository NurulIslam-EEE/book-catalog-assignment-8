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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.create({ data });
    return result;
});
const getAllBooks = (paginationData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.findMany({
        skip: paginationData.skip,
        take: paginationData.size,
        include: {
            category: true,
        },
    });
    const total = yield prisma.book.count();
    const page = total / (paginationData.size || 1);
    console.log("tttt", total);
    return {
        meta: {
            page: paginationData.page || 1,
            size: (paginationData === null || paginationData === void 0 ? void 0 : paginationData.size) || 1,
            total: total,
            totalPage: page,
        },
        data: result,
    };
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.findUnique({
        where: {
            id: id,
        },
        include: {
            category: true,
        },
    });
    return result;
});
const updateSingleBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.update({
        where: {
            id: id,
        },
        data: data,
    });
    return result;
});
const deleteSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.delete({
        where: {
            id: id,
        },
    });
    return result;
});
exports.BookService = {
    createBook,
    getAllBooks,
    getSingleBook,
    deleteSingleBook,
    updateSingleBook,
};
