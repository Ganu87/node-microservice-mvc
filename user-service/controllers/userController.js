const { createUser,findAllUsers,findUserById } = require('../services/userService');
const { responseObjV1 } = require('../../util/responseFormat');
const { infoLogger, errorLogger } = require("../../lib/elkLogger");

async function addUser(req, res, next) {
    try {
        const userData = {
            name: req.body.name,
            email: req.body.email
        };
        const user = await createUser(userData);
        infoLogger.info({ message: req.originalUrl + " : users created "+userData });
        //res.status(200).json({ message: 'New User Created '+JSON.stringify(userData)});
        res.send(
            responseObjV1({
                message: 'New User Added',
                data: user
            })
        )
    } catch (error) {
        console.log('Error : creating user ' + error);
        infoLogger.error({ message: req.originalUrl + " : users creation error "+error });
        next(error);
    }
}

async function getAllUsers(req,res,next) {

    try {
        const users = await findAllUsers();
        infoLogger.info({ message: req.originalUrl + " : get all users "});
        res.send(responseObjV1({
            message:'All Users List',
            data:users
        }))
    } catch (error) {
        console.log('Error : creating user ' + error);
        infoLogger.error({ message: req.originalUrl + " : get all users "+error });
        next(error);
    }
    
}

async function getUserById(req,res,next) {
    
    try {
        const user= await findUserById(req.params.id);
        infoLogger.info({ message: req.originalUrl + " : get users by id "+user });
        res.send(responseObjV1({
            message:"Uer Details",
            data:user
        }))
    } catch (error) {
        console.log('Error : creating user ' + error);
        infoLogger.error({ message: req.originalUrl + " : get users by id "+error });
        next(error);
    }
}

module.exports = {
    addUser,
    getAllUsers,
    getUserById
}