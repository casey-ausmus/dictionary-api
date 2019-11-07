const fs = require("fs");

const cache = fs.readFileSync("./data/words_alpha.txt")
  .toString()
  .split("\r\n")
  .filter((s) => s.length > 2);

module.exports = cache;
