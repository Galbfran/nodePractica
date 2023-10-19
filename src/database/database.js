import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env


export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect:'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

