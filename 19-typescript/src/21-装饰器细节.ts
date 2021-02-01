 /**
  * 1、装饰器函数定义
  * 2、装饰器函数执行顺序
  */
 
 /*****************************  1、装饰器细节 ****************************/

 /**
  * 类装饰器
  * @param target  只有一个参数
  */
function d11(target: Function) {
  console.log(typeof target,  target)
}

function d12(target: Function) {
  console.log(typeof target,  target, '12')
}

/**
 * 属性装饰器
 * @param target 静态属性target指MyClass构造函数  实例属性target指new MyClasss
 * @param name 
 */
function d2(target: any, name: string) {
  console.log(typeof target, name)
}

/**
 * 访问器装饰器  应用于类的访问器getter setter上
 * @param target 
 * @param name 
 * @param descriptor 
 */
function d3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log(typeof target, name, descriptor)
}

/**
 * 方法装饰器   应用于类的方法上
 * @param target 
 * @param name 
 * @param descriptor 
 */
function d4(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log(typeof target, name, descriptor)
}

/**
 * 参数装饰器
 * @param target 
 * @param name 
 * @param descriptor 
 */
function d5(target: any, name: string, index: number) {
  console.log(typeof target, name, index)
}


@d11
@d12
class MyClasss {

  @d2
  a: number

  @d2
  static property1: number

  @d3
  get b() {
    return 1
  }

  @d3
  static get c() {
    return 1
  }

  @d4
  public method2(@d5 x: number, @d5 y: number) {
    //
  }

  @d4
  public static method3() {}
}



 /*****************************  2、装饰器函数执行顺序 ****************************/
 /**
  * 实例装饰器
  */
  // 属性 => 访问符 => 参数
  

  /**
   * 静态装饰器
   */
  // 属性 => 访问符 => 参数


  /**
   * 类
   */
  // 类
  