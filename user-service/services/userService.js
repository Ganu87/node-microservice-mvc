const { User } = require('../models/sequelize/index');
const { InternalServerError } = require('../../util/error.js');
const esClient = require('../../lib/elasticsearch.js');
const logger = require('../../lib/logger.js');

async function createUser(userData) {

    try {
        logger.info("cerating new user");
        // insert into PG DB
        const user = await User.create({ name: userData.name, email: userData.email });
        //return user;

        // insert into elasticsearch

        await esClient.index({
            index:'empusers',
            id:user.id,
            body:user
        });

        return user;
    } catch (error) {
        //console.log("error occured in userService while creating new user " + error);
        logger.error("error occured in userService while creating new user " + error);
        throw new InternalServerError('Error ocured in user service while adding new Employee');
    }
}

async function findAllUsers() {
    try {
        logger.info("fetching all users");
        const result = await esClient.search({
            index: 'empusers',
            body: {
                size:100,
                query: {
                    match_all:{}
                }
            }
        });
        
        if(result.hits.total.value>0){
            console.log("=== fetching data from elasticsearch");
            //return result.hits.hits[0]._source;
            return result.hits.hits.map(hit => hit._source); // Return all documents

        }

        const users = await User.findAll();
        return users;

    } catch (error) {
        //console.log("error occured in userService while getting list of users " + error);
        logger.error("error occured in userService while getting list of users " + error);
        throw new InternalServerError('error occured in userService while getting list of users');
    }
}

async function findUserById(id) {

    try {
        logger.info("fetching single users");
        const result = await esClient.search({
            index: 'empusers',
            body: {
                query: {
                    term: {
                        _id: id  // `_id` must be queried using `term`, not `match`
                    }
                }
            }
        });
        
        if(result.hits.total.value>0){
            console.log("=== fetching data from elasticsearch");
            return result.hits.hits[0]._source;
        }

        const user = await User.findByPk(id);
        return user;
    } catch (error) {
        //console.log("error occured in userService while getting list of users " + error);
        logger.error("error occured in userService while getting list of users " + error);
        throw new InternalServerError('error occured in userService while getting user details by id');
    }
    
}

module.exports = {
    createUser,
    findAllUsers,
    findUserById
}