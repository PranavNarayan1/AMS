import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';

dotenv.config();

const sequelize = new Sequelize({

    database: process.env.DB_NAME,
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host:'localhost',
    port: parseInt(process.env.DB_PORT)

})

sequelize.authenticate().then(() =>{

    console.log('Database is connected successfully');

}).catch((err) => {
    console.log('failed to connect',err);
})


sequelize.sync().then(() => {
    console.log('all tables created successfully');
}).catch((err) => {
    console.log('Error in creating tables in database',err);
})

export default sequelize;