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
const cors_1 = __importDefault(require("cors"));
const http_status_1 = __importDefault(require("http-status"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const user_route_1 = require("./app/modules/users/user.route");
const category_route_1 = require("./app/modules/category/category.route");
const books_route_1 = require("./app/modules/books/books.route");
const orders_route_1 = require("./app/modules/orders/orders.route");
const app = (0, express_1.default)();
const corsOptions = {
    origin: true,
    credentials: true,
};
app.use("*", (0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1/users", user_route_1.UserRoute);
app.use("/api/v1/auth", user_route_1.UserRoute);
app.use("/api/v1/categories", category_route_1.CategoryRoute);
app.use("/api/v1/books", books_route_1.BookRoute);
app.use("/api/v1/orders", orders_route_1.OrdersRoute);
app.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(http_status_1.default.OK).json({
        success: true,
        message: "Welcome to Book Catalog API",
    });
}));
//handle not found
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "Not Found",
        errorMessages: [
            {
                path: req.originalUrl,
                message: "API Not Found",
            },
        ],
    });
    next();
});
exports.default = app;
