// 命名空间 解析成自执行函数
namespace k1 {
  let a = 10
  export var obj = {
    a
  }
}

namespace k2 {
  let a = 20
  console.log(k1.obj.a)
}

namespace k3 {
  let b = 10
  export var obj2 = {
    b
  }
}