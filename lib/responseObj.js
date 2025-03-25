'use strict';
const { access } = require('node:fs');
const { STATUS_CODES } = require('node:http');

const APP_PREFIX = 'MY_APP';

const RESPONSE_MAPPING = {
    ok: {
        success:true,
        httpStatusCode:200,
        customeStatusCode:`${APP_PREFIX}_2000`,
        displayMessage:'completed',
        responseMessage:STATUS_CODES[200]
    },
    internalServerError: {
        success: false,
        httpStatusCode: 500,
        customStatusCode: `${APP_PREFIX}_5000`,
        displayMessage: 'Something Went Wrong',
        responseMessage: STATUS_CODES[500]
      }
}

module.exports = {
    RESPONSE_MAPPING,
}