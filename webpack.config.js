// 这是webpack的配置文件
const path = require("path")

const htmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin=require('vue-loader/lib/plugin')

module.exports = {

    // 入口
    entry: path.join(__dirname, "./src/main.js"),
    // 出口
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    // 模式
    mode: "development",

    // 插件的节点
     plugins: [
         // new webpack.HotModuleReplacementPlugin(),
         new htmlWebpackPlugin({
             template: path.join(__dirname, "./src/index.html"),
             filename: "index.html"
         }),
         new VueLoaderPlugin()
     ],

     module: { //配置第三方插件的节点
         rules: [
             { test: /\.css$/, use: ['style-loader', 'css-loader'] },
             { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
             { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
             { test: /\.(png|jpg|gif|jpeg)$/, use: 'url-loader?limit=1100000&name=[hash]-[name].[ext]' },//?limit=1100000&name=[hash]-[name].[ext] 后面这段可以不设置
             { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
             { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
             { test: /\.vue$/, use: "vue-loader" }
        ]
     }

 }