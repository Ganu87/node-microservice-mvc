const sequelize = require('../../../lib/sequelize');
const User = require('./user.js');

console.log("User "+User);
console.log("User Model Imported:", User ? "Yes" : "No"); // ✅ Debugging line


const db={User};

console.log("DB+++ "+db);

sequelize.sync({alter:true})
.then(()=> console.log("Sequelize PG DB synced"))
.catch(err => console.log("Error occured while sync Sequelize PG DB "+err));

module.exports=db;