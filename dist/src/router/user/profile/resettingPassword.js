"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sessions_1 = require("../../../middleware/sessions");
const resetController_1 = require("../../../controller/resetController");
const routes = (0, express_1.default)();
routes.put('/reset', sessions_1.sessionCheck, resetController_1.resettingPassword);
exports.default = routes;
