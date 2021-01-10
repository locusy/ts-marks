/*
  1、接口属性
  2、使用接口描述函数
  3、接口合并
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

let o: o1 & o2 = Object.assign( {}, {x: 1, y: '2'}, {z: 2} )
