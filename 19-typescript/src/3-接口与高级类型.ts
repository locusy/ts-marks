/*
  1、接口属性
  2、使用接口描述函数
  3、接口合并
  4、联合类型
  5、联合类型
  6、字面量类型
  7、类型别名
  8、interface和type的区别
  9、类型推导
  10、类型断言
*/

/************************************  1、接口属性 ***********************************/
class Persones {
  constructor(public username: string, public age: number) {
  }
}

class Student extends Persones {
}

interface Point {
  readonly x: number,   // 只读属性
  readonly y: number,
  // gender?: number,  // 可选属性
  [job: string]: Persones | number,  // 任意索引
  [key: number]: Student       // 数字索引必须是字符串索引的子类型，key不能是boolean
}

let ming: Point = {
  x: 100,
  y: 100,
}

ming.job = {
  username: '12',
  age: 12
}

ming[23] = {
  username: '23',
  age: 12
}



/************************************  2、使用接口描述函数 ***********************************/
interface iFunc {
  // 参数：返回值
  (x: number, y: number): number
}

let fn3: iFunc = function(a: number, b: number) {
  return a + b
}

let fn4: iFunc = function(a: number, b: number) {
  return a + b
}


// 应用1：将函数作为参数传入
function todo (callback: iFunc) {
  // ...
  let v = callback(1, 2)
  //
}

todo( function(a: number, b: number): number {
  return a + b
} )


// 应用2
interface iEventFunc {
  (e: MouseEvent): void
}

function on( el: HTMLElement, evname: string, callback: iEventFunc ) {}

let div = document.querySelector( 'div' )
if ( div ) {
  on( div, 'click', function( e ) {
    e.clientX
  } )
}



/************************************  3、接口合并 ***********************************/
interface Box {
  width: number,
  height: number,
  fn( a: number ): number
}

interface Box {
  scale: string,
  fn( a: string ): string
}

let box: Box = {
  width: 10,
  height: 20,
  scale: '1',
  fn: function( a: any ): any {
    return a
  }
}



/************************************  4、联合类型 ***********************************/
function css( el: HTMLElement, attr: string, value: number|string ) {}

let div1 = document.querySelector( 'div' )
if ( div1 ) {
  css( div1, 'width', '100px' )
  css( div1, 'opacity', 100 )
  css( div1, 'opacity', [1,2] )
}



/************************************  5、联合类型 ***********************************/
interface o1 {x: number; y: string}
interface o2 {z: number}

// "target": "es6" 或者 "lib": ["es6"]
let o: o1 & o2 = Object.assign( {}, {x: 1, y: '2'}, {z: 2} )



/************************************  6、字面量类型 ***********************************/
function setPosition(ele: HTMLElement, direction: 'left' | 'top' | 'right' | 'bottom') {}

let div2 = document.querySelector( 'div' )
if ( div2 ) {
  setPosition( div2, 'left' )
  setPosition( div2, 'top' )
  setPosition( div2, 'd' )
}



/************************************  7、类型别名 ***********************************/
type dir = 'left' | 'top' | 'right' | 'bottom'
function setPositions(ele: HTMLElement, direction: dir) {
  // ...
}



/************************************  8、interface和type的区别 ***********************************/
// interface
// 只能描述obejct/class/function的类型
// 同名interface自动合并，利于扩展

// type
// 不能重名
// 能描述所有数据



/************************************  9、类型推导 ***********************************/
// 这里ts会推导出函数的返回值为 100|'tang'
function derivation(x: number, y: number) {
  if ( x ) {
    return 100
  } else {
    return 'tang'
  }
}



/************************************  10、类型断言 ***********************************/
// 不设置类型断言
let img = document.querySelector('#img');
// 访问img.src会报错

// 设置类型断言 把它的类型标注的更为精确 类似于一种类型转换
// let img = <HTMLImageElement>document.querySelector('#img');
// 或者：
// let img = document.querySelector('#img') as HTMLImageElement
