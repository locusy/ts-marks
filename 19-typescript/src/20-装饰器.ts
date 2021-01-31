/**
 * 1、装饰器介绍
 * 2、装饰器对类的方法拓展
 */


 /*****************************  1、装饰器介绍 ****************************/
// 装饰器是一个函数，它通过 @装饰器函数 这种特殊的语法附加在类、方法、访问符、属性、参数上，对他们进行包装，然后返回
// 一个包装后的目标对象，装饰器工作在累的构建阶段，而不是使用阶段
// function 装饰器1() {
// }

// @装饰器1
// class MyClass {

//   @装饰器2
//   a: number

//   @装饰器3
//   static property1: number

//   @装饰器4
//   get b() {
//     return 1
//   }

//   @装饰器5
//   static get c() {
//     return 1
//   }

//   @装饰器6
//   public method2(@装饰器5 x: number) {
//     //
//   }

//   @装饰器7
//   public static method3() {}
// }



 /*****************************  2、装饰器对类的方法拓展 ****************************/
// 装饰器函数
function log(target: Function, name: string, descriptor: PropertyDescriptor) {

  /**
   * target: 被装饰的方法所属的类
   * name: 当前被装饰的方法的名称
   * descripter: 描述符
   */
  console.log('log：', target, name, descriptor)

  // 把原始的方法提取出来
  let fn = descriptor.value
  descriptor.value = function(a: number, b: number) {
    console.log('this is a new func')

    let result = fn(a, b)
    console.log('日志：',  {
      name,
      a,
      b,
      result
    })
    return result
  }

}

// 原始类
class M {
  
  // 通过装饰器对当前类的方法add做了拓展
  @log
  static add(a: number, b: number) {
    return a + b
  }

  @log
  static sub(a: number, b: number) {
    return a - b
  }

}

let m1 = M.add(1, 2)
console.log('m1:', m1)

let m2 = M.sub(1, 3)
console.log('m2:', m2)


