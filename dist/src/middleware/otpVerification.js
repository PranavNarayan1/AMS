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
exports.otpMailGenerator = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const redis_1 = __importDefault(require("../db/redis"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const otpMailGenerator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.otp == undefined) {
            let email = req.body.email;
            let config = {
                service: 'gmail',
                auth: {
                    user: 'pranav.narayan@appinventiv.com',
                    pass: 'ocjwvovskolxuftx'
                }
            };
            const transport = nodemailer_1.default.createTransport(config);
            transport.verify(function (error, success) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log("MAILER CONNECTION VERIFIED");
                }
            });
            const otp = Math.floor(1000 + Math.random() * 9000);
            let message = {
                from: 'pranav.narayan@appinventiv.com',
                to: email,
                subject: "Forget password OTP",
                html: `Your otp is ${otp}`
            };
            transport.sendMail(message).then(() => {
                redis_1.default.setEx(`OTP${req.body.id}`, 9000, `${otp}`);
                res.send("Mail Send Successfully");
            }).catch((err) => {
                res.send(err);
            });
        }
        else {
            next();
        }
    }
    catch (error) {
        res.json({ error: error });
    }
});
exports.otpMailGenerator = otpMailGenerator;
