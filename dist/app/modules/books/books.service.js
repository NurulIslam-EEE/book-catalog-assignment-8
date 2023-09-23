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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.create({ data });
    return result;
});
const getAllBooks = (filter, paginationData) => __awaiter(void 0, void 0, void 0, function* () {
    const {} = paginationData;
    const { searchterm } = filter, filterData = __rest(filter, ["searchterm"]);
    console.log("ffff", filterData);
    const andCondition = [];
    if (searchterm) {
        andCondition.push({
            OR: ["title", "genre", "author"].map((field) => ({
                [field]: {
                    contains: searchterm,
                    mode: "insensitive",
                },
            })),
        });
    }
    if (Object.keys(filterData).length > 0) {
        andCondition.push({
            AND: Object.keys(filterData).map((key) => ({
                [key]: {
                    equals: filterData[key],
                },
            })),
        });
    }
    const whereConditions = andCondition.length > 0 ? { OR: andCondition } : {};
    const result = yield prisma.book.findMany({
        where: whereConditions,
        skip: paginationData.skip,
        take: paginationData.size,
        include: {
            category: true,
        },
        orderBy: paginationData.sortBy && paginationData.sortOrder
            ? { [paginationData.sortBy]: paginationData.sortOrder }
            : { title: "desc" },
    });
    const total = yield prisma.book.count();
    const page = total / (paginationData.size || 1);
    console.log("fff", filter);
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
