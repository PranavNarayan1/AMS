"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// importing controller
const updateProfile_1 = require("../../../controller/user controller/updateProfile");
//importing middleware
const updateProfile_middleware_1 = require("../../../middleware/updateProfile.middleware");
const sessions_1 = require("../../../middleware/sessions");
const routes = (0, express_1.default)();
routes.put('/update-profile', sessions_1.sessionCheck, updateProfile_middleware_1.UserValidate, updateProfile_1.updateProfileController);
exports.default = routes;
