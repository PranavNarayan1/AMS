
import { Request,Response,NextFunction } from "express";
import nodemailer from 'nodemailer'
import redisclient from '../db/redis';
import dotenv from 'dotenv'
dotenv.config()
export const otpMailGenerator=async (req:Request,res:Response,next: NextFunction)=>{
    try{
        if(req.body.otp==undefined){

            let email = req.body.email;
            let config={
                service:'gmail',
                auth: {
                    user: 'pranav.narayan@appinventiv.com',
                    pass: 'ocjwvovskolxuftx'
                }
            }
            
            const transport=nodemailer.createTransport(config)
            
            transport.verify(function(error, success) {
                if (error) {
                  console.log(error);
                } else {
                  console.log("MAILER CONNECTION VERIFIED");
                }
              });

            const otp = Math.floor(1000 + Math.random() * 9000);
            let message={
                from:'pranav.narayan@appinventiv.com',
                to:email,
                subject:"Forget password OTP",
                html:`Your otp is ${otp}`
            }
            transport.sendMail(message).then(()=>{
                redisclient.setEx(`OTP${req.body.id}`,9000,`${otp}`)
                res.send("Mail Send Successfully")

            }).catch((err)=>{
                res.send(err)
            })
        }else{
            next()
        }

    }catch(error){
        res.json({error:error})
    }
}