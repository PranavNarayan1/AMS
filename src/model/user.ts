import { DataType } from "sequelize-typescript";

import sequilizeDB from '../db/database'


export const userSchema=sequilizeDB.define('users',{
    username:{
        type:DataType.STRING
    },
    first_name:{
        type:DataType.STRING
    },
    last_name:{
        type:DataType.STRING
    },
    email:{
        type:DataType.STRING
    },
    password:{
        type:DataType.STRING
    },
    profile:{
        type:DataType.BLOB,
        defaultValue:null
    },
    Mob_number:{
        type:DataType.BIGINT
    },
    gender:{
        type:DataType.STRING
    },
    DOB:{
        type:DataType.DATEONLY  //stores data in format 1990-01-15
    }
})