import { DataType } from "sequelize-typescript";
import sequlizeDB from '../db/database'
import { userSchema } from "./user";


export const sessionSchema=sequlizeDB.define("session",{
    userId:{
        type:DataType.INTEGER,
        references: {
            model: userSchema, 
            key: 'id',      // The column in the referenced table to use as the reference
          },
          allowNull: false,
          onDelete: 'CASCADE'
    },
    isActive:{
        type:DataType.BOOLEAN
    }
}
)