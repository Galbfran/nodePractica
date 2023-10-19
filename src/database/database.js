import Sequelize from 'sequelize'

const sequelize = new Sequelize('nodePrueba', 'postgres', 'Franco123', {
    host: 'localhost',
    dialect:'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });