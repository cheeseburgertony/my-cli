const { program } = require("commander");

const helpOptions = () => {
  // 处理 --version 的操作
  const version = require("../../package.json").version;
  program.version(version, "-v --version");

  // 增强其他的options的操作
  program.option("-m, --mycli", "a customcli program~");
  program.option(
    "-d --dest <dest>",
    "a destination folder, 例如：-d /src/components"
  );

  // 在 --help 的时候显示额外的信息
  program.on("--help", () => {
    console.log("");
    console.log("Other:");
    console.log("  xxx");
    console.log("  yyy");
  });
};

module.exports = helpOptions;
