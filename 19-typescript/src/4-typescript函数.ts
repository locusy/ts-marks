/*
  1、函数标注
  2、可选参数和默认参数
  3、剩余参数
*/


/************************************  1、函数标注 ***********************************/
// 写法1：
function fn1(a: string): string {
  return '';
}

// 写法2：
let fn10: (a: string) => string = function(a: string): string {
  return '';
}
// 简写：
let fn11: (a: string) => string = function(a) {
  return '';
}

// 写法3：
type callback = (a: string) => string;
let fn12: callback = function(b) {
  return ''
}

// 写法4：
interface iCallback {
  (a: string): string
}
let fn13: iCallback = function(c) {
  return ''
}




/************************************  2、可选参数和默认参数 ***********************************/
// 可选参数
function fn14(a: string, b?: number): string {
  return '';
}

// 默认参数
function sort(items: Array<any>, item: 'dec'|'pass' = 'dec'): void {}
sort([1, 2, 3], 'dec')
sort([1, 2, 3], 'pass')
sort([1, 2, 3], 'e')




/************************************  3、剩余参数 ***********************************/
interface iObj {
  [key: string]: number
}
function merge(target: iObj, ...others: Array<iObj>) {
  return others.reduce( ( prev, current ) => {
    prev = Object.assign( prev, current )
    return prev
  }, target )
}
// function merge(target: iObj, ...others: Array<iObj>) {
//   return Object.assign( target, ...others )
// }
let newObj = merge({x: 1}, {y: 2}, {z: 3})



