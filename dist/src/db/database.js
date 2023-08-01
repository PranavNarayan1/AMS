"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_typescript_1 = require("sequelize-typescript");
dotenv_1.default.config();
const sequelize = new sequelize_typescript_1.Sequelize({
    database: process.env.DB_NAME,
    dialect: 'postgres',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10)
});
sequelize.authenticate().then(() => {
    console.log('Database is connected successfully');
}).catch((err) => {
    console.log('failed to connect', err);
});
sequelize.sync().then(() => {
    console.log('all tables created successfully');
}).catch((err) => {
    console.log('Error in creating tables in database', err);
});
exports.default = sequelize;
