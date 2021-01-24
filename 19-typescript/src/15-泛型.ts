/**
 * 1、为什么使用泛型？
 * 2、泛型的使用
 * 3、泛型类
 * 4、泛型在实际接口中的使用
 */

 /*****************************  1、为什么使用泛型？ ****************************/
//  当我们要获取对象的属性的时候，obj和key都是可变的，这个时候不好定义参数的类型
// function getVal(obj, key) {
//   return obj[key]
// }

// let obj1 = {
//   x: 1,
//   y: 2
// }

// let obj3 = {
//   username: 'tina',
//   age: 2
// }

// getVal(obj1, 'x')
// getVal(obj3, 'username')



 /*****************************  2、泛型的使用 ****************************/
function getVal<T>(obj: T, key: keyof T) {
  return obj[key]
}

let obj1 = {
  x: 1,
  y: 2
}

let obj3 = {
  username: 'tina',
  age: 2
}

getVal<typeof obj1>(obj1, 'x')
getVal<typeof obj3>(obj3, 'username')



 /*****************************  3、泛型类 ****************************/
//  具体见 12-抽象类.ts
class Components<T1, T2> {
  props: T1;
  state: T2;

  constructor(props: T1) {
    this.props = props
  }

  render(): string {
    return ''
  }
}



 /*****************************  4、泛型在实际接口中的使用 ****************************/
interface IResponseData<T> {
  code: number;
  message?: string;
  data: T
}

interface IResponseUserData {
  id: number;
  username: string;
  email: string
}

interface IResponseArticleData {
  id: number;
  title: string;
  author: IResponseUserData
}

async function getData<U>(url: string) {
  let response = await fetch(url)
  let data: Promise<IResponseData<U>> = await response.json();
  return data;
}

(async function() {
  let userData = await getData<IResponseUserData>('./user')
  userData.data.email

  let articleData = await getData<IResponseArticleData>('./article')
  articleData.data.author
})()