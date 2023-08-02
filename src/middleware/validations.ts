import { log } from "console";
import {Request,Response} from "express";
import Joi, { date } from "joi";
// console.log("i am here in validation-----------------");

//Fucntion for user validation
export const newUserValidate=(req:Request,res:Response,next: () => void)=>{
    // console.log("inside newUser Valkdation")
    
    const userSchema=Joi.object({
    username:Joi.string().required(),
    first_name:Joi.string().required(),
    last_name:Joi.string().required(),
    email:Joi.string().regex(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    password:Joi.string().min(8).required(),
    number:Joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required(),
    gender:Joi.string().equal(...['male','female']).required(),
    DOB:Joi.date().required()
  });
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

export const productValidator=(req:Request,res:Response,next: () => void)=>{
    
    const productSchema=Joi.object({
    name:Joi.string().required(),
    description:Joi.string().required(),
    title:Joi.string().required(),
    base_price:Joi.number().required()
  });
    const result=productSchema.validate({
        name:req.body.name,
        description:req.body.description,
        title:req.body.title,
        base_price:req.body.base_price
    })
    if(result.error)
    {
        res.status(400).send(result.error);
    }
    else
    {
        next();
    }
}

export const loginValidation=(req:Request,res:Response,next:()=>void)=>{
      const isValid=Joi.object({
        username:Joi.string().required(),
        password:Joi.string().min(8).required()
      })
      let result=isValid.validate(req.body)
      result.error?res.status(400).send(result):next();
}

export const addressValidation=(req:Request,res:Response,next: () => void)=>{
    
    const addressSchema=Joi.object({
    userId:Joi.number().required(),
    house_no:Joi.string().required(),
    street_no:Joi.string().required(),
    area:Joi.string().required(),
    landmark:Joi.string().allow('').optional(),
    city:Joi.string().required(),
    zipcode:Joi.number().required(),
    address_type:Joi.valid('home','office','other').required()
  });
    const result=addressSchema.validate({
        userId:req.body.id,
        house_no:req.body.house_no,
        street_no:req.body.street_no,
        area:req.body.area,
        landmark:req.body.landmark,
        city:req.body.city,
        zipcode:req.body.zipcode,
        address_type:req.body.address_type
    })
    if(result.error)
    {
        res.status(400).send(result.error);
    }
    else
    {
        next();
    }
}