const path = require("path")
module.exports={
	entry:{
		main:["babel-polyfill","./src/main.js"]
	},
	mode:"development",
	output:{
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname,'../dist'),
		publicPath: '/' 
	},
	devServer:{   
		contentBase : 'dist',
		overlay:true   //网页的页面提示错误
	},
	module:{
		rules:[
			{
				test:/\.js/,
				use:[
					{
						loader:"babel-loader"
					}
				],
				exclude:/node_modules/
			},
			{
				test:/\.css$/,
				use:[
					{
						loader:"style-loader"
					},
					{
						loader:"css-loader"
					}
				]
			},
			{
				test: /\.html$/,
				use:[
					{
						loader:"file-loader",
						options:{
							name: "[name].html"
						}
					},
					{
						loader:"extract-loader"
					},
					{
						loader:"html-loader",
						options:{
							attrs:["img:src"]
						}
					}
				]
			},
			{
				test: /\.(jpg|gif|png)$/,
				use:[
					{
					loader:"file-loader",
					options:{
						name:"image/[name].[ext]"
						}
					}
				]
			}
		]
	}

}