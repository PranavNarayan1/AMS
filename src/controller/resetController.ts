import {Request, Response} from 'express';
import { userSchema } from '../model/user';
import redisclient from '../db/redis';



export const resettingPassword = async (req : Request, res : Response) => {
    try {
        await userSchema.update(
            {password:req.body.password},
            {where : {id : req.body.id}}    
        )
        await redisclient.del(`OTP${req.body.id}`)
        res.status(201).send("Password changed successfully")
    } catch (error) {
        console.log("Error occured",error);
        
    }
}       
