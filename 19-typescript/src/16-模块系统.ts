/**
 * 1、模块化
 * 2、UMD规范代码
 */

/*****************************  1、模块化 ****************************/
// CMD
// commonjs规范
// nodejs
// module.exports

// AMD
// 浏览器
// require.js


/*****************************  2、UMD规范代码 ****************************/
// 由于ComminJS/AMD/CMD的差异兼容。随着Node.js的流行，前后端都可以用js进行开发，或多或少会出现前后端
// 使用相同代码的情况，特别是不依赖宿主环境（浏览器，服务器）的偏底层代码。我们能实现一套多端适用（同构），
// 在不同的模块化标准下使用。UMD就是一种解决方式。
// (function(root, factory) {
//   if(typeof module === 'object' && typeof module.exports === 'object') {
//     module.exports = factory()
//   } else if(typeof define === 'function' && define.amd) {
//     define( factory )
//   } else {
//     root.methodName = factory
//   }
// })(this, function() {
//   let a = 1;
//   let b = 2;
//   return {
//     x: a,
//     y: b
//   }
// })


export let obj = {
  x: 1
}
