// 箭头函数中的this是固定的
interface T {
  a: number;
  fn: (x: number) => void;
}

let obj2: T = {
  a: 1,
  fn(this: Window, x: number) {
    return () => {
      // this为Window
    }
  }
}
