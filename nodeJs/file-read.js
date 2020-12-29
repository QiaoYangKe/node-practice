// 浏览器中的 JavaScript 没有文件操作能力
// node中javascript 具有文件操作能力
// fs 是file-stystem 的简写 文件系统
var fs = require('fs')

fs.readFile('./data/test.txt', function(error, data) {
    console.log(data.toString())
})

