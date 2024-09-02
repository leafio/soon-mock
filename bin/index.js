#!/usr/bin/env node
const path = require("path");
console.log("----soon-mock init----");

// const process = require("node:process");

// console.log("---process path ---", process.cwd());
// console.log("---process args ---", process.argv);

const { program } = require('commander');

program
  .option('-p,--port <number>',)
  .option('-w,--work-dir <folder>',);

program.parse();
const options = program.opts();
const { workDir = 'mock', port = '9999' } = options

console.log("path:", `${__dirname}/dist/index.js`);
const basePath = path.resolve(__dirname, "..");
const filename = path.resolve(__dirname, 'server.js');
// const nodemon = require('nodemon');
// nodemon({

//     ignore: [ `${workDir}/data`],
//     watch: [ 
//       `${workDir}`
//     ],
//     "exec": `node  ${filename} ${workDir} ${port}`,
//     ext: 'js json'
//   })
// // console.log("nodemon",nodemon)
// nodemon.on('start', function () {
//     // console.log('----soon-mock started----')
//   }).on('quit', function () {
//     // console.log('----soon-mock quited----')
//     process.exit()
//   }).on('restart', function (files) {
//     console.log('----soon-mock restarted due to: ', files)
//   })



const { spawn } = require('child_process');

// 创建一个新的Node.js进程来运行script.js
const child = spawn('node', [filename, workDir, port], { stdio: 'inherit' });

// 等待子进程结束
child.on('close', (code) => {
  // console.log(`子进程退出码：${code}`);
});

// 如果你想向子进程发送数据，可以像这样使用child.stdin：
// child.stdin.write('你想发送的数据\n');
