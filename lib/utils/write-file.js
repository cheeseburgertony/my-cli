const fs = require("fs");

const writeFile = (path, content) => {
  return fs.promises.writeFile(path, content);
};

module.exports = writeFile;
