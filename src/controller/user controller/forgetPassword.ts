
import { Request,Response } from "express";
import redisclient from '../../db/redis';
import dotenv from 'dotenv'
dotenv.config()
export const fpController=async (req:Request,res:Response)=>{
    try{
        let otp=await redisclient.get(`OTP${req.body.id}`);
        if(req.body.otp==otp){
            res.status(200).json({message: "otp verified successfully"})
        }
        else{
            res.status(401).json({message : "unaothorised or incorrect otp"});
        }
    }
    catch(err){
        console.log("error occured",err);
        
    }
}
