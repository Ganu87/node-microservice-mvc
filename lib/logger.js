const winston = require('winston');
const { combine, timestamp, printf } = winston.format;

const logFormat = printf(({ level, message, timestamp,meta }) => {
    return `${timestamp} [${level}] [${meta}] ${message}`;
});

const logger = winston.createLogger({
    level: 'debug',
    format: combine(
        timestamp(),
        logFormat
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/app.log' })
    ],
    meta: true, // Log request metadata
    msg: "HTTP {{req.method}} {{req.url}}", // Log request method and route
    expressFormat: true,
    colorize: false
});

// Override console methods to use winston logger
console.log = (...args) => {
    logger.info(args.join(' '));
};

console.info = (...args) => {
    logger.info(args.join(' '));
};

console.warn = (...args) => {
    logger.warn(args.join(' '));
};

console.error = (...args) => {
    logger.error(args.join(' '));
};

module.exports = logger;

