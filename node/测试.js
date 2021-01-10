// 作用域题：
let obj = {
  a: 1,
  b: function () {
    let f = () => {
      return this
    }
    return f()
  }
}
let fn = obj.b
console.log(obj.b())   // 对象的属性调用，指向obj
console.log(fn())   // 函数调用 指向 window