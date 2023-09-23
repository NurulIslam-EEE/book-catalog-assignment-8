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
exports.BookController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const books_service_1 = require("./books.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_service_1.BookService.createBook(req.body);
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send({
            success: false,
            statusCode: http_status_1.default.BAD_REQUEST,
            data: err,
        });
    }
});
const getAllBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lowercaseKeys = (obj, deep = false) => Object.keys(obj).reduce((acc, key) => {
        acc[key.toLowerCase()] =
            deep && typeof obj[key] === "object"
                ? lowercaseKeys(obj[key])
                : obj[key];
        return acc;
    }, {});
    const lowerCaseQuery = lowercaseKeys(req.query);
    const filters = (0, pick_1.default)(lowerCaseQuery, [
        "minprice",
        "maxprice",
        "category",
        "searchterm",
    ]);
    const paginationOptions = (0, pick_1.default)(lowerCaseQuery, [
        "page",
        "limit",
        "size",
        "sortby",
        "sortorder",
    ]);
    const pagination = paginationHelpers_1.paginationHelpers.calculatePagination(paginationOptions);
    console.log("lllllll", filters);
    try {
        const result = yield books_service_1.BookService.getAllBooks(filters, pagination);
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Books fetched successfully!",
            meta: result.meta,
            data: result.data,
        });
    }
    catch (err) {
        res.send({
            success: false,
            statusCode: http_status_1.default.BAD_REQUEST,
            data: err,
        });
    }
});
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_service_1.BookService.getSingleBook(req.params.id);
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send({
            success: false,
            statusCode: http_status_1.default.BAD_REQUEST,
            data: err,
        });
    }
});
const updateSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_service_1.BookService.updateSingleBook(req.params.id, req.body);
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book updated successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send({
            success: false,
            statusCode: http_status_1.default.BAD_REQUEST,
            data: err,
        });
    }
});
const deleteSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield books_service_1.BookService.deleteSingleBook(req.params.id);
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Book is deleted successfully!",
            data: result,
        });
    }
    catch (err) {
        res.send({
            success: false,
            statusCode: http_status_1.default.BAD_REQUEST,
            data: err,
        });
    }
});
exports.BookController = {
    createBook,
    getAllBook,
    getSingleBook,
    updateSingleBook,
    deleteSingleBook,
};
