const { promisify } = require("util");
const download = promisify(require("download-git-repo"));
const { program } = require("commander");
const { VUE_REPO } = require("../config/repo");
const execCommand = require("../utils/exec-command");
const { compileEjs } = require("../utils/compile-ejs");
const writeFile = require("../utils/write-file");

const createProjectActiosn = async (project) => {
  try {
    // 1.从编写的项目模板中clone下来项目到指定的文件夹中
    await download(VUE_REPO, project, { clone: true });

    // 2.给予用户一些提示
    // console.log(`cd ${project}`);
    // console.log('npm install');
    // console.log('npm run dev');

    // 3.帮助执行npm install
    const commandName = process.platform === "win32" ? "npm.cmd" : "npm";
    await execCommand(commandName, ["install"], {
      cwd: `./${project}`,
      shell: true,
    });

    // // 4.帮助执行npm run dev
    await execCommand(commandName, ["run", "dev"], {
      cwd: `./${project}`,
      shell: true,
    });
  } catch (error) {
    console.log("Github连接失败，请检查网络是否正常");
  }
};

const addComponentAction = async (cpnname) => {
  // 创建一个组件，编写组件的模板，根据内容给模板中填充数据
  console.log("添加组件到文件夹中", cpnname);
  const result = await compileEjs("component.vue.ejs", {
    name: cpnname,
    lowername: cpnname.toLowerCase(),
  });

  const dest = program.opts().dest || "src/components";
  await writeFile(`${dest}/${cpnname}.vue`, result);
  console.log("创建组件成功", cpnname + ".vue");
};

module.exports = {
  createProjectActiosn,
  addComponentAction,
};
