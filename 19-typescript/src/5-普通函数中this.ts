interface T {
  a: number,
  fn: (x: number) => void
}

// 普通函数中的this取决于调用的对象
let obj: T = {
  a: 1,
  fn(this: T, x: number) {
    // (<T>this).b
  }
}