'use strict'

const { RESPONSE_MAPPING } = require('../lib/responseObj');

const responseObjV1 = ({
    responseType = RESPONSE_MAPPING.ok,
    message = '',
    data = '',
    errors = []
} = {}
) => {
    const { success, displayMessage, httpStatusCode, customStatusCode, responseMessage } = responseType;

    return {
        success,
        httpStatusCode,
        customStatusCode,
        responseMessage,
        msg: message || displayMessage,
        data,
        errors
    }
}; 

module.exports={responseObjV1,}