// import { Request,Response } from 'express'
// import redisClient from '../../db/redis'
// import { userSchema } from '../../model/user'
// import {sessionSchema} from '../../model/sessions'
// import { Op } from 'sequelize'
// import jwt from 'jsonwebtoken'
// import dotenv from 'dotenv'
// dotenv.config()


// export const loginController=async (req:Request,res:Response)=>{
//     let token:string
//     let data=await userSchema.findOne({
//     where:{
//             [Op.and]: [
//               { username: req.body?.username },
//               { password: req.body?.password }
//             ]      
//         }
//     })
//     let userData=JSON.parse(JSON.stringify(data))
//     console.log(userData.id);
//     if(userData){
//         let id = userData.id;
//         await sessionSchema.create()
//     }
//     token=jwt.sign({id:userData.id},process.env.SECRET_KEY,{expiresIn:3600})
//     console.log("token generated successfully",token);
    
//     if(userData){
//         console.log('getting response from redis');
//         let redisResponse = await redisClient.get(`${userData.id}`);
//         console.log(redisResponse)
//         if(redisResponse==null){
//             console.log("cache miss")
//             let isActiveSession=await sessionSchema.findOne({
//                 where:{
//                         [Op.and]: [
//                         { userId: userData.id},
//                         { isActive: true }
//                         ]      
//                     }
//             })
//             if(JSON.parse(JSON.stringify(isActiveSession))==null){
//             {
//                 await sessionSchema.create(
//                     {
//                         userId:userData.id,
//                         isActive:true
//                     }
//                 )
//                 redisClient.setEx(`${userData.id}`,3600,'true')
//             }
//             }else{
//                 redisClient.setEx(`${userData.id}`,3600,'true')
//             }
//             res.status(201).send(token)
//         }else{
//             console.log('cache hit')
//             res.status(200).send(token)
//         }
//     }else{
//             return res.status(404).send("Please register yourself first")
//     }    
// }

import { Request, Response } from "express";
import redisClient from "../../db/redis";
import { userSchema } from "../../model/user";
import { sessionSchema } from "../../model/sessions";
import { Op } from "sequelize";
import jwt from 'jsonwebtoken';

let token:string;
export const loginController = async (req: Request, res: Response) => {
    let data = await userSchema.findOne({
        where:{
            [Op.and]:[
                {username: req.body?.username},
                {password: req.body?.password}
            ]
        }
    })

    let userData = JSON.parse(JSON.stringify(data));
    if(!userData){
        res.status(404).json({message : "User not found please register first"});
    }
    else{
        await sessionSchema.create({
            userId:userData.id,
            isActive: true
        });
        token = jwt.sign({id:userData.id},process.env.SECRET_KEY, {expiresIn: 100 * 60 * 60});
        res.status(200).json({message: "User logged in successfully\n",token});
    }
}