import { Sequelize } from 'sequelize';
import { env } from 'process';

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.HOST,
    username: 'root',
    password: '',
    database: 'task-manager',
});