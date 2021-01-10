/*
  1、"strictNullChecks":true
  2、对象类型
  3、包装对象
  4、数组类型
  5、元组类型
  6、枚举类型
  7、无值类型
  8、never类型
  9、any类型
  10、unknown类型
  11、函数类型
*/

/********************* 1、"strictNullChecks":true 时 会有错误提示 *********************/
let n: number;
n = null;
n.toFixed(1);


let a: Object = {};
let arr: Array<number> = [1, 2, 3];
let d1: Date = new Date();


/************************************  2、对象类型 ***********************************/
// 一、直接定义
let person: { username: string; age: number} = {
  username: 'tian',
  age: 12
}


// 二、接口定义（复用性高）
interface Person {
  username: string;
  age: number;
}

let user1: Person = {
  username: 'apple',
  age: 11
}

let user2: Person = {
  username: 'pear',
  age: 13
}


// 三、对象定义（缺点：有点复杂）
class Personer {
  // public username: string
  constructor(public username: string, public age: number) {
  }
}
let user = new Personer('orange', 45)


// 接口定义函数参数
interface ajaxOptions {
  url: string,
  method: string
}

function ajax(options: ajaxOptions) {}

ajax({
  url: 'kkk',
  method: 'get'
})


/************************************  3、包装对象 ***********************************/
// 字符对象有的字符串不一定有
let b: string;   // 字符串类型
b = '1';
b = new String('1')


let c: String;   // 字符对象类型
c = new String('2')
c = '2'



/************************************ 4、数组类型 ***********************************/
// 元素类型相同、有序
// 一、泛型
let arr1: Array<number> = [1, 2, 3]

// 二、简写
let arr2: number[] = [1, 2, 3]


/************************************  5、元组类型 ***********************************/
// 元素类型不一定相同
let data1: [string, number] = ['calender', 2020]
data1.push(23)   // 后续添加的数据必须是string, number其中的一个
// data1.push({})


/************************************  6、枚举类型 ***********************************/
enum HTTP_CODE {
  FIRST,
  OK = 200,
  NOT_FOUND = 404,
  METHOD_NOT_FOUND
}

HTTP_CODE.OK  

// 注意事项：
// 1、枚举key不能是数字 
// 2、枚举的value可以是数字，称为数字类型枚举，也可以是字符串，称为字符串类型枚举，但不能是其他值，默认为0
// 3、枚举值可以省略，如果省略，则第一个枚举值默认为0，非第一个枚举值为上一个数字枚举值+1
  HTTP_CODE.FIRST
  HTTP_CODE.METHOD_NOT_FOUND
// 4、枚举值为只读（常量），初始化后不能更改
  // HTTP_CODE.OK = 1  // 报错 

enum URLS {
  USER_REGISTER = '/user/register',
  USER_LOGIN = '/user/login',
  // 如果前一个枚举值为字符串，则后续枚举值必须手动赋值
  INDEX = 1
}
URLS.USER_LOGIN



/************************************  7、无值类型 ***********************************/
function fn():void {
  // return 或者 return undefined
  // "strictNullChecks": false的情况下，可以return null
  return undefined;
}
let v = fn();


/************************************  8、never类型 ***********************************/
function fn1():never {
  throw new Error('error')
}

/************************************  9、any类型 ***********************************/
let d: any = 'any'



/************************************  10、unknown类型 ***********************************/
// 安全版的any类型
// 1、unknown仅能赋值给unknown、any
// 2、unknown没有任何属性和方法

// 对比any和unknown
let e: any = 'mongo'
let f: number = 1;
f.toFixed(1);
f = e
f.toFixed(1);

let g: unknown = 'mongo'
let h: number = 1;
h.toFixed(1);
h = g
h.toFixed(1);


// unknown比any更严格
e.attr
g.attr



/************************************  11、函数类型 ***********************************/
function fn2(a: number, b: number): number {
  return a + b;
}

let result: number = fn2(1, 2)
