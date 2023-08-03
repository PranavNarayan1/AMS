"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//controller
const signup_1 = require("../../../controller/user controller/signup");
//Middleware
const validations_1 = require("../../../middleware/validations");
const routes = (0, express_1.default)();
routes.post('/signup', validations_1.newUserValidate, signup_1.signUpController);
exports.default = routes;
