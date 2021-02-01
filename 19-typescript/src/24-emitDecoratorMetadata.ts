/**
 * 在tsconfig.json里面加上emitDecoratorMetadata, ts会在编译之后自动给类、方法、访问符、属性、参数添加如下元数据：
 * design:type 被装饰目标的类型
 * design:paramtypes 
 * design:returntype  当前被包装的函数返回值类型
 */
import 'reflect-metadata'

function fe() {
  return function(target: any, name: string, descriptor: PropertyDescriptor) {
    
    // console.log(descriptor.value.length)

    // console.log(Reflect.getMetadata('design:type', target, name))
    // console.log(Reflect.getMetadata('design:paramtypes', target, name))
    // console.log(Reflect.getMetadata('design:returntype', target, name))

    let _t = Reflect.getMetadata('design:paramtypes', target, name)[0]
    // console.log(_t)
    let value = descriptor.value
    if(_t === Number) {
      // console.log('数字类型')
      value(100)
    }
    if(_t === String) {
      // console.log('数字类型')
      value('100')
    }
    if(_t === Date) {
      // console.log('数字类型')
      value(new Date)
    }

  }
}

class B {
  name: string

  constructor() {

  }

  // @fe()
  // method1(a: string, b: number): string {
  //   console.log()
  //   return 'a'
  // }

  @fe()
  method2(x?: number) {
    console.log(x)
  }
}

let b = new B()
b.method2()

export default {}