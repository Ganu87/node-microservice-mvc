const { Client } = require("@elastic/elasticsearch");
const CONSTANTS = require('./constant');

// Initialize Elasticsearch Client
const esClient = new Client({ node: CONSTANTS.ELASTICSEARCH_URL });

module.exports = esClient;
