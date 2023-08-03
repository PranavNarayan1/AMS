import express, { NextFunction } from 'express';
import * as dotenv from 'dotenv'
//database importing

import {redFun}from './src/db/redis'
//importing routers
import signup from './src/router/user/auth/signup'
import login from './src/router/user/auth/login'
import logout from './src/router/user/auth/logout'
import addAddress from './src/router/user/profile/addAddress'
import forgetPass from './src/router/user/auth/forgetPassword'
import addProfilePic from './src/router/user/profile/addPicture'
import addProduct from './src/router/user-Activity/addProducts'
import updateProfile from './src/router/user/profile/updateProfile';
import otpVerification from './src/router/user/profile/otpVerification';
import resettingPassword from './src/router/user/profile/resettingPassword';
import makeBid from './src/router/user-Activity/makeBid';
//All constant decleration

const app=express()
dotenv.config();
const port=process.env.PORT;
app.use(express.json())

//Routers

app.use('/user',signup)
app.use('/user',login)
app.use('/user',logout)
app.use("/user",addAddress)
app.use('/user',forgetPass)
app.use('/user',addProfilePic)
app.use('/product',addProduct)
app.use('/user',updateProfile)
app.use('/user', otpVerification)
app.use('/user',resettingPassword)
app.use('/user',makeBid)
redFun();


// function  handlerNoRouter(req: Request,res: Response,next: ()=>void ){
//     return res.json({message:'Route not found'})
// }
// app.use(handlerNoRouter)

// app.use((_err : Error,_req:Request,res:Response ,_next:()=>void)=>
//     res.json('')
// })
console.log('123123213', port)
app.listen(port,()=>{
    console.log(`Listen to the port ${port}`)
})