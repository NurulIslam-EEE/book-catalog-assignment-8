"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoute = void 0;
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const auth_1 = __importDefault(require("../../middleWares/auth"));
const router = express_1.default.Router();
router.post("/create-category", (0, auth_1.default)("admin"), category_controller_1.CategoryController.createCategory);
router.get("/", category_controller_1.CategoryController.getAllCategory);
router.get("/:id", category_controller_1.CategoryController.getSingleCategory);
router.patch("/:id", (0, auth_1.default)("admin"), category_controller_1.CategoryController.updateSingleCategory);
router.delete("/:id", (0, auth_1.default)("admin"), category_controller_1.CategoryController.deleteSingleCategory);
exports.CategoryRoute = router;
