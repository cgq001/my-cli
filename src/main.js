/*
* 前端 入口文件
*
*/ 
require('babel-runtime/regenerator')
require('./main.css')
require('./index.html')

let a=async ()=>{
	let a='a'
	let b='b'
	await console.log(b);
	console.log(a);
}
a()
console.log('12345')