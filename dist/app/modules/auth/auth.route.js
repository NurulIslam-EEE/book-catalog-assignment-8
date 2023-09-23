"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const auth_1 = __importDefault(require("../../middleWares/auth"));
const auth_controller_1 = require("./auth.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// profile
router.get("/", (0, auth_1.default)("admin", "customer"), auth_controller_1.AuthController.getUserprofile);
exports.AuthRoute = router;
