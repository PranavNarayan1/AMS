import { Request,Response } from "express"
import {productSchema} from '../model/product'
import { categoriesSchema } from "../model/category"
import { Op } from "sequelize"


export const addProductController=async (req:Request,res:Response)=>{
    await productSchema.create({
        name:req.body.name,
        descritpion:req.body.description,
        title:req.body.title,
        base_price:req.body.base_price,
        sellerId:req.body.id,
        categoryId:req.params.subCategorie,
        addressId:req.params.address
    })
}
export const categories=async (req:Request,res:Response)=>{
    try{
        let data=await CategoryQuery(null)
        res.status(200).json({"choose category" : data})
    }catch(error){
        res.status(400).send(error)
    }
}
export const subCategories=async (req:Request,res:Response)=>{
    try{
        let data=await CategoryQuery(parseInt(req.params.categorie))
        res.status(200).send({"choose sub-categorie":data})
    }catch(error){
        res.status(400).send(error)
    }
}

//common query for category
const CategoryQuery=async (value:null|number)=>{
     let data=await categoriesSchema.findAll({
        attributes: ['id', 'name'],
        where:{
            parentId:{
                [Op.eq]: value,
            }
        }
    })
    return data
}