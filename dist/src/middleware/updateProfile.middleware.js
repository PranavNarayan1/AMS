"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidate = void 0;
const joi_1 = __importDefault(require("joi"));
const UserValidate = (req, res, next) => {
    // console.log("inside newUser Valkdation")
    const userSchema = joi_1.default.object({
        id: joi_1.default.number().required(),
        username: joi_1.default.string().optional(),
        first_name: joi_1.default.string().optional(),
        last_name: joi_1.default.string().optional(),
        email: joi_1.default.string().regex(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
        password: joi_1.default.string().min(8).optional(),
        number: joi_1.default.number().integer().min(Math.pow(10, 9)).max(Math.pow(10, 10) - 1).optional(),
        gender: joi_1.default.string().equal(...['male', 'female']).optional(),
        DOB: joi_1.default.date().optional()
    });
    const result = userSchema.validate(req.body);
    if (result.error) {
        res.status(400).send(result.error);
    }
    else {
        next();
    }
};
exports.UserValidate = UserValidate;
