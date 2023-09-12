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
exports.CategoryController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const category_service_1 = require("./category.service");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.createCategory(req.body);
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Category created successfully!",
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
const getAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.getAllCategory();
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Categories fetched successfully",
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
const getSingleCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.getSingleCategory(req.params.id);
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Category fetched successfully",
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
const updateSingleCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.updateSingleCategory(req.params.id, req.body);
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Category updated successfully",
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
const deleteSingleCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield category_service_1.CategoryService.deleteSingleCategory(req.params.id);
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Category deleted successfully",
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
exports.CategoryController = {
    createCategory,
    getAllCategory,
    getSingleCategory,
    updateSingleCategory,
    deleteSingleCategory,
};
