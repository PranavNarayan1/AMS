"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//database importing
const redis_1 = require("./src/db/redis");
//importing routers
const signup_1 = __importDefault(require("./src/router/user/auth/signup"));
const login_1 = __importDefault(require("./src/router/user/auth/login"));
const logout_1 = __importDefault(require("./src/router/user/auth/logout"));
const addAddress_1 = __importDefault(require("./src/router/user/profile/addAddress"));
const forgetPassword_1 = __importDefault(require("./src/router/user/auth/forgetPassword"));
const addPicture_1 = __importDefault(require("./src/router/user/profile/addPicture"));
const addProducts_1 = __importDefault(require("./src/router/user-Activity/addProducts"));
const updateProfile_1 = __importDefault(require("./src/router/user/profile/updateProfile"));
const otpVerification_1 = __importDefault(require("./src/router/user/profile/otpVerification"));
const resettingPassword_1 = __importDefault(require("./src/router/user/profile/resettingPassword"));
const makeBid_1 = __importDefault(require("./src/router/user-Activity/makeBid"));
//All constant decleration
const app = (0, express_1.default)();
const port = process.env.PORT;
dotenv_1.default.config();
app.use(express_1.default.json());
//Routers
app.use('/user', signup_1.default);
app.use('/user', login_1.default);
app.use('/user', logout_1.default);
app.use("/user", addAddress_1.default);
app.use('/user', forgetPassword_1.default);
app.use('/user', addPicture_1.default);
app.use('/product', addProducts_1.default);
app.use('/user', updateProfile_1.default);
app.use('/user', otpVerification_1.default);
app.use('/user', resettingPassword_1.default);
app.use('/user', makeBid_1.default);
(0, redis_1.redFun)();
app.listen(port, () => {
    console.log(`Listen to the port ${port}`);
});
