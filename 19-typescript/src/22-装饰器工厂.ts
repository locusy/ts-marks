/**
 *  如果我们需要给装饰器执行过程中传入一些参数的时候，就可以使用装饰器工厂来实现
 */

//  装饰器工厂函数
function log(type: string) {
  return function (target: Function, name: string, descriptor: PropertyDescriptor) {
    let fn = descriptor.value
    descriptor.value = function(a: number, b: number) {
      console.log('this is a new func')
  
      let result = fn(a, b)
      console.log('日志：',  {
        type,
        name,
        a,
        b,
        result
      })
      return result
    }
  }
}

// 原始类
class M {
  
  @log('log')
  static add(a: number, b: number) {
    return a + b
  }

  @log('storage')
  static sub(a: number, b: number) {
    return a - b
  }

}

let m1 = M.add(1, 2)
console.log('m1:', m1)

let m2 = M.sub(1, 3)
console.log('m2:', m2)


// 默认情况下 没有导出会被当成全局模块
export default {}