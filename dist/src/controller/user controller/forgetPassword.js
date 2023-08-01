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
exports.fpController = void 0;
const redis_1 = __importDefault(require("../../db/redis"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const fpController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let otp = yield redis_1.default.get(`OTP${req.body.id}`);
        if (req.body.otp == otp) {
            res.status(200).json({ message: "otp verified successfully" });
        }
        else {
            res.status(401).json({ message: "unaothorised or incorrect otp" });
        }
    }
    catch (err) {
        console.log("error occured", err);
    }
});
exports.fpController = fpController;
