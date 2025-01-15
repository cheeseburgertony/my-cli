#!/usr/bin/env node
const { program } = require("commander");

// 处理 --version 的操作
const version = require("../package.json").version;
program.version(version, "-v --version");

// 让 program 解析 process.argv 参数
program.parse(program.argv);
