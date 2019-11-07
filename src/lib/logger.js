const bunyan = require("bunyan");

const logger = bunyan.createLogger({
  name: "dictionary-api",
  level: "info",
  src: true
});

module.exports = logger;
