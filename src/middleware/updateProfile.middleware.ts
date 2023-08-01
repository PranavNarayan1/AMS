import Joi from 'joi';
import {Request,Response} from "express";



export const UserValidate=(req:Request,res:Response,next: () => void)=>{
    // console.log("inside newUser Valkdation")
    
    const userSchema=Joi.object({
    id:Joi.number().required(),
    username:Joi.string().optional(),
    first_name:Joi.string().optional(),
    last_name:Joi.string().optional(),
    email:Joi.string().regex(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    password:Joi.string().min(8).optional(),
    number:Joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).optional(),
    gender:Joi.string().equal(...['male','female']).optional(),
    DOB:Joi.date().optional()
  })

  const result=userSchema.validate(req.body)
  if(result.error)
  {
      res.status(400).send(result.error);
  }
  else
  {
      next();
  }
}