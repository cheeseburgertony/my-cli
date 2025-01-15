const { spawn } = require("child_process");

const execCommand = (...args) => {
  return new Promise((resolve, reject) => {
    // npm install / npm run dev
    // 1.开启子进程执行命令
    const childProcess = spawn(...args);

    // 2.获取子进程的输入和错误信息
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);

    // 3.监听子进程的执行结束，并且关闭掉
    childProcess.on("close", () => {
      resolve();
    });
  });
};

module.exports = execCommand;
