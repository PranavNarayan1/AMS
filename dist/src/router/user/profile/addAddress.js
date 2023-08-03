"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//controller
const validations_1 = require("../../../middleware/validations");
//Middleware
const sessions_1 = require("../../../middleware/sessions");
const address_controller_1 = require("../../../controller/user controller/address.controller");
const routes = (0, express_1.default)();
routes.put('/add_address', sessions_1.sessionCheck, validations_1.addressValidation, address_controller_1.addAddressController);
exports.default = routes;
