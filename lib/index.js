#!/usr/bin/env node
const { program } = require("commander");
const helpOptions = require("./core/help-options");
const { createProjectActiosn, addComponentAction } = require("./core/actions");

// 配置所有的options
helpOptions();

// 增加具体的一些命令操作 mycli create xxx
program
  .command("create <project> [...others]")
  .description("create vue project into a folder, 例如, mycli create vue-demo")
  .action(createProjectActiosn);

program
  .command('addcpn <cpnname> [...others]')
  .description('add vue component into a folder, 例如, mycli addcpn HelloWorld [-d src/components]')
  .action(addComponentAction)

// 让 program 解析 process.argv 参数
program.parse(process.argv);

// 获取额外传递的参数
// console.log(program.opts().dest);
