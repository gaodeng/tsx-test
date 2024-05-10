const path = require('path');


module.exports = {
  // 设置模式：'development' 或 'production'
  mode: 'production',

  // 入口文件
  entry: './src/index.tsx',

  // 输出配置
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // 解析
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
