"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//controller
const logout_1 = require("../../../controller/user controller/logout");
const routes = (0, express_1.default)();
routes.patch('/logout', logout_1.logoutController);
exports.default = routes;
