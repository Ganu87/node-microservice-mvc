const pino = require("pino");
const logstashStream = require("./logstashStream");

// Logger for info logs
const infoLogger = pino(
  {
    level: "info",
    base: null,
    formatters: {
      level(label) {
        return { level: label };
      },
    },
  },
  logstashStream
);

// Logger for error logs
const errorLogger = pino(
  {
    level: "error",
    base: null,
    formatters: {
      level(label) {
        return { level: label };
      },
    },
  },
  logstashStream
);

module.exports = { infoLogger, errorLogger };
