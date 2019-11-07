const app = require("./app");
const logger = require("./src/lib/logger");

const port = 8080; // Normally this would be configurable, but for simplicity it is hard coded
app.listen(port);

logger.info(`Dictionary API started on port ${port}`);
