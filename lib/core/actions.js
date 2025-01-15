const { promisify } = require("util");
const download = promisify(require("download-git-repo"));
const { VUE_REPO } = require("../config/repo");

const createProjectActiosn = async (project) => {
  // 从编写的项目模板中clone下来项目到指定的文件夹中
  try {
    await download(VUE_REPO, project, { clone: true });
  } catch (error) {
    console.log("Github连接失败，请检查网络是否正常");
  }
};

module.exports = {
  createProjectActiosn,
};
