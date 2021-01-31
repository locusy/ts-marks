/**
 * 1、装饰器对类的方法拓展
 */



 /*****************************  1、装饰器对类的方法拓展 ****************************/
// 装饰器函数
function log(target: Function, name: string, descriptor: PropertyDecorator) {

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
      type,
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