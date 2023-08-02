"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addProducts_1 = require("../../controller/addProducts");
const sessions_1 = require("../../middleware/sessions");
const routes = (0, express_1.default)();
routes.post('/add', sessions_1.sessionCheck, addProducts_1.categories);
exports.default = routes;
