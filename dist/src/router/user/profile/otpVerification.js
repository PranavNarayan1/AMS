"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sessions_1 = require("../../../middleware/sessions");
const forgetPassword_1 = require("../../../controller/user controller/forgetPassword");
const routes = (0, express_1.default)();
routes.post('/verify_otp', sessions_1.sessionCheck, forgetPassword_1.fpController);
exports.default = routes;
