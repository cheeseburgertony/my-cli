#!/usr/bin/env node
const { program } = require("commander");
const helpOptions = require("./core/help-options");

// 配置所有的options
helpOptions();

// 让 program 解析 process.argv 参数
program.parse(process.argv);

// 获取额外传递的参数
console.log(program.opts().dest);
