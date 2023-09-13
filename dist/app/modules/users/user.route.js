"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middleWares/auth"));
const router = express_1.default.Router();
router.post("/signup", user_controller_1.UserController.createUser);
router.get("/login", user_controller_1.UserController.loginUser);
router.get("/", (0, auth_1.default)("admin"), user_controller_1.UserController.getUsers);
router.get("/:id", (0, auth_1.default)("admin"), user_controller_1.UserController.getSingleUser);
router.patch("/:id", (0, auth_1.default)("admin"), user_controller_1.UserController.updateUser);
router.delete("/:id", (0, auth_1.default)("admin"), user_controller_1.UserController.deleteUser);
exports.UserRoute = router;
