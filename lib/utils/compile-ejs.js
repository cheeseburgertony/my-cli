const path = require("path");
const ejs = require("ejs");

const compileEjs = (tempName, data) => {
  return new Promise((resolve, reject) => {
    // 1.获取当前模板路径
    const tempPath = `../template/${tempName}`;
    const absolutePath = path.resolve(__dirname, tempPath);

    // 2.使用ejs引擎编译模板
    ejs.renderFile(absolutePath, data, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

module.exports = {
  compileEjs,
};
