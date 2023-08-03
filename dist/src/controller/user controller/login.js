"use strict";
// import { Request,Response } from 'express'
// import redisClient from '../../db/redis'
// import { userSchema } from '../../model/user'
// import {sessionSchema} from '../../model/sessions'
// import { Op } from 'sequelize'
// import jwt from 'jsonwebtoken'
// import dotenv from 'dotenv'
// dotenv.config()
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const user_1 = require("../../model/user");
const sessions_1 = require("../../model/sessions");
const sequelize_1 = require("sequelize");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let token;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    let data = yield user_1.userSchema.findOne({
        where: {
            [sequelize_1.Op.and]: [
                { username: (_a = req.body) === null || _a === void 0 ? void 0 : _a.username },
                { password: (_b = req.body) === null || _b === void 0 ? void 0 : _b.password }
            ]
        }
    });
    let userData = JSON.parse(JSON.stringify(data));
    if (!userData) {
        res.status(404).json({ message: "User not found please register first" });
    }
    else {
        yield sessions_1.sessionSchema.create({
            userId: userData.id,
            isActive: true
        });
        token = jsonwebtoken_1.default.sign({ id: userData.id }, process.env.SECRET_KEY, { expiresIn: 100 * 60 * 60 });
        res.status(200).json({ message: "User logged in successfully\n", token });
    }
});
exports.loginController = loginController;
