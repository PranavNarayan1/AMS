"use strict";
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
exports.resettingPassword = void 0;
const user_1 = require("../model/user");
const redis_1 = __importDefault(require("../db/redis"));
const resettingPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_1.userSchema.update({ password: req.body.password }, { where: { id: req.body.id } });
        yield redis_1.default.del(`OTP${req.body.id}`);
        res.status(201).send("Password changed successfully");
    }
    catch (error) {
        console.log("Error occured", error);
    }
});
exports.resettingPassword = resettingPassword;
