let path = require('path')

module.exports = {
  //开发环境
  mode: 'development',
  entry: './test/demo.js',
  output: {
    path:path.resolve(__dirname,'build'),
    filename:'bundle.js'    //输出的文件名，有则写，无则新建
  }
}