"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
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
dotenv.config();
const port = process.env.PORT;
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
// function  handlerNoRouter(req: Request,res: Response,next: ()=>void ){
//     return res.json({message:'Route not found'})
// }
// app.use(handlerNoRouter)
// app.use((_err : Error,_req:Request,res:Response ,_next:()=>void)=>
//     res.json('')
// })
app.listen(3001, () => {
    console.log(`Listen to the port ${port}`);
});
