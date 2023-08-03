"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//controller
const login_1 = require("../../../controller/user controller/login");
//Middleware
const validations_1 = require("../../../middleware/validations");
// import { sessionCheck } from '../../../middleware/sessions';
const routes = (0, express_1.default)();
routes.post('/signin', validations_1.loginValidation, login_1.loginController);
exports.default = routes;
