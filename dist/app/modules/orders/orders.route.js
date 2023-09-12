"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRoute = void 0;
const express_1 = __importDefault(require("express"));
const orderes_controller_1 = require("./orderes.controller");
const auth_1 = __importDefault(require("../../middleWares/auth"));
const router = express_1.default.Router();
router.post("/create-order", (0, auth_1.default)("customer"), orderes_controller_1.OrdersController.createOrder);
router.get("/", (0, auth_1.default)("admin"), orderes_controller_1.OrdersController.getAlOrder);
router.get("/:id", (0, auth_1.default)("admin", "customer"), orderes_controller_1.OrdersController.getSingleOrder);
exports.OrdersRoute = router;
