const {Sequelize} = require('sequelize');
const CONSTANTS = require('./constant');

const sequelize = new Sequelize(
    CONSTANTS.PG_DB_NAME,
    CONSTANTS.PG_DB_USER,
    CONSTANTS.PG_DB_PASS,
    {
        host:CONSTANTS.DB_HOST,
        dialect:CONSTANTS.PG_DB_DIALECT,
        logging:false
    }
);

sequelize.authenticate()
.then(()=>console.log('Sequelize PG DB Connected!!!'))
.catch(err=>console.log('Sequelize PG DB Connection Error : '+err));

module.exports = sequelize;