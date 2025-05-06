import { Sequelize } from 'sequelize';

const dbName = 'test';
const dbUsername = 'root';
const dbUsernamePassword = '';
const dbHost = 'localhost';


const db = new Sequelize(dbName, dbUsername, dbUsernamePassword, {
  host: dbHost,
  dialect: 'mysql'
})

export default db;