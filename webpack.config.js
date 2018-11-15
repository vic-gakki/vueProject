const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
	// entry: path.resolve(__dirname,'src/js/main.js'),
	// output: {
	// 	path: path.resolve(__dirname,'dist'),
	// 	filename: 'bundle.js'
	// },
	module: {
		rules: [
			{test:/\.js$/, use:'babel-loader', exclude:/node_modules/},
			{test:/\.css$/, use:['style-loader','css-loader']},
			{test:/\.less$/, use:['style-loader','css-loader','less-loader']},
			{test:/\.(jpe?g|gif|png)$/, use:'url-loader?limit=25000&name=[hash:8]-[name].[ext]'},
			{test:/\.(woff|woff2|eot|svg|ttf)$/, use:'url-loader'},
			{test:/\.vue$/, use:'vue-loader'}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: path.resolve(__dirname,'src/index.html'),
			filename: 'index.html'
		}),
		new vueLoaderPlugin()
	],
	mode: 'development'
}