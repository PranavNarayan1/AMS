"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//controller
const forgetPassword_1 = require("../../../controller/user controller/forgetPassword");
//Middleware
const sessions_1 = require("../../../middleware/sessions");
const otpVerification_1 = require("../../../middleware/otpVerification");
const routes = (0, express_1.default)();
routes.patch('/forget_password', sessions_1.sessionCheck, otpVerification_1.otpMailGenerator, forgetPassword_1.fpController);
exports.default = routes;
