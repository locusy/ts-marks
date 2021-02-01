/**
 * 元数据：用来描述数据的数据
 * 比如：一首歌曲本身是一组数据，同时还有一组用来描述歌曲的歌手、格式、时长的数据，那么这组数据
 * 就是歌曲数据的元数据
 */

 /**
  * 元数据定义方法：可以定义一个全局的对象存储元数据，也可以用库reflect-metadata
  * 元数据会被附加在指定的类、方法等数据上面，但是又不会影响类、方法本身的代码
  * 内部会用map的数据结构来管理元数据和数据的关系
  */


/*****************************  以下的type就是一个元数据 ****************************/

function Loger(type: string) {
  return function(target: Function) {
    target.prototype.type = type
    // Reflect.defineMetadata('type', type, target)
  }
}

function log(type?: string) {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    
    // log 方法装饰器是比 L方法装饰器先执行的

    let value = descriptor.value
    descriptor.value = function(a: number, b: number) {
      let result = value(a, b)

      let _type = type
      if( !_type ) {
        _type = typeof target === 'function' ? target.prototype.type : target.type

        // if( typeof target === 'function' ) {
        //   _type = Reflect.getMetadata('type', target)
        // } else {
        //   _type = Reflect.getMetadata('type', target.constuctor)
        // }

      }

      console.log('日志：',  {
        type: _type,
        name,
        a,
        b,
        result
      })
      return result
    }
  }
}

// 将类的装饰器函数Loger的参数 传给类的函数装饰器函数log
@Loger('log')
// @Reflect.metadata('type', 'storage')
class M {
  @log()
  static add(a: number, b: number) {
    return a + b
  }

  @log()
  static sub(a: number, b: number) {
    return a - b
  }
}

let m1 = M.add(1, 2)
console.log('m1:', m1)

let m2 = M.sub(1, 3)
console.log('m2:', m2)



/*****************************  reflect-metadata的使用 ****************************/
import 'reflect-metadata'

// @Reflect.metadata('n', 1)
// class A {
//   @Reflect.metadata('n', 2)
//   public static method1() {
//   }

//   @Reflect.metadata('n', 4)
//   public method2() {
//   }
// }
// let obj = new A()

/**
 * metadateKey
 * metadateValue
 * target
 * propertyKey
 */

// 以下效果等同于@Reflect.metadata('n', 1)
// Reflect.defineMetadata( 'n', 1, A )

// Reflect.defineMetadata( 'n', 2, A, 'method1' )
// Reflect.defineMetadata( 'n', 3, obj )
// Reflect.defineMetadata( 'n', 4, obj, 'method2' )

// console.log(Reflect.getMetadata('n', A))
// console.log(Reflect.getMetadata('n', A, 'method1'))
// console.log(Reflect.getMetadata('n', obj))
// console.log(Reflect.getMetadata('n', obj, 'method2'))



// 默认情况下 没有导出会被当成全局模块
export default {}