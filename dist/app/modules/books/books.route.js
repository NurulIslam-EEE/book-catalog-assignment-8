"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoute = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const auth_1 = __importDefault(require("../../middleWares/auth"));
const router = express_1.default.Router();
router.post("/create-book", (0, auth_1.default)("admin"), books_controller_1.BookController.createBook);
router.get("/", books_controller_1.BookController.getAllBook);
router.get("/:id", books_controller_1.BookController.getSingleBook);
router.patch("/:id", (0, auth_1.default)("admin"), books_controller_1.BookController.updateSingleBook);
router.delete("/:id", (0, auth_1.default)("admin"), books_controller_1.BookController.deleteSingleBook);
exports.BookRoute = router;
