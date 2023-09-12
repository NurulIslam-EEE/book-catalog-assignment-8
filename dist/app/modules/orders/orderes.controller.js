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
exports.OrdersController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const orders_service_1 = require("./orders.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orders_service_1.OrderService.createOrder(req.body);
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Order created successfully!",
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
const getAlOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orders_service_1.OrderService.getAllOrder();
        console.log("userrr", req.user);
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Orders retrieved successfully",
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
const getSingleOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const result = yield orders_service_1.OrderService.getSingleOrder(req === null || req === void 0 ? void 0 : req.params.id, (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.role, (_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.id);
        console.log("userrr", req.user);
        res.status(200).send({
            success: true,
            statusCode: 200,
            message: "Orders retrieved successfully",
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
exports.OrdersController = { createOrder, getAlOrder, getSingleOrder };
