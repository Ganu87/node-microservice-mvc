'use strict'

const { RESPONSE_MAPPING } = require('../lib/responseObj');

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
    }
}

class InternalServerError extends CustomError {
    get responseType() {
        return RESPONSE_MAPPING.internalServerError;
    }
}

module.exports = {
    InternalServerError,
}