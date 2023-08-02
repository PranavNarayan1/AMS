"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//controller
const addProfile_1 = require("../../../controller/user controller/addProfile");
const imageUpload_1 = require("../../../middleware/imageUpload");
//Middleware
const sessions_1 = require("../../../middleware/sessions");
const routes = (0, express_1.default)();
routes.patch('/add-profile-picture', sessions_1.sessionCheck, imageUpload_1.upload, addProfile_1.addPicController);
exports.default = routes;
