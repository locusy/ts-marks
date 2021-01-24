/**
 * 1、类型保护
 * 2、类型操作
 * 3、类型兼容
 */

/*****************************  1、类型保护 ****************************/
function fn(a: string|number) {
  // 不能直接作为字符串用，因为有风险
  // a.substring(1, 2)

  // 类型断言
  (<string>a).substring(1,2)

  if (typeof a === 'string') { 
    a.substring(1, 2)
  } else {
    a.toFixed(1)
  }
}


// 自定义类型保护
function canEach(data: any): data is Element[]|NodeList {
  return data.forEach === undefined;
}

function fn2(elements: Element[]|NodeList|Element) {
  if(canEach(elements)) {
    elements.forEach( (element:  Element) => {
      element.className = ''
    })
  } else {
    elements.className = ''
  }
}


/*****************************  2、类型操作 ****************************/
/**
 * typeof
 */
let str = 'lisa'

// let申明变量
let t = typeof str

// type申明类型名称
type myType = typeof str

let tian = t
let zhi: myType = '...'


/**
 * keyof
 */
interface Person {
  id: number,
  name: string
}

type personKeys = keyof Person


/**
 * keyof 应用
 */
let p1 = {
  name: 'mouse',
  age: 36
}

let PT = typeof p1

function getPersonval(k: keyof typeof p1) {
  return p1[k]
}


/**
 * in
 */
interface Persons {
  id: number,
  name: string
}
type personKey = keyof Persons
type newPerson = {
  [k in personKey]: string
}



/*****************************  3、类型兼容 ****************************/
interface IFly {
  fly(): void;
}

class Person2 implements IFly {
  name: string;
  age: number;

  study() {};

  fly() {}
}

class Cat2 implements IFly {
  name: string;
  age: number;

  catMouse() {}

  fly(): void {
    throw new Error("Method not implemented.");
  }
}

let p2 = new Person2()
let c2 = new Cat2()

/**
 * 结构Person2里的变量Cat2都有  才能这样用
 */
// function fn2(arg: Person2) {
//   arg.name
// }
// fn2( c2 )

function fn5(arg: IFly) {
  arg.fly()
}
fn5( p2 )
fn5( c2 )


