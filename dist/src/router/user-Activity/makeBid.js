"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sessions_1 = require("../../middleware/sessions");
const bidController_1 = require("../../controller/bidController");
const routes = (0, express_1.default)();
routes.post('/making-bid', sessions_1.sessionCheck, bidController_1.biddingOnProducts);
exports.default = routes;
