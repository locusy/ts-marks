class User4 {
  constructor(
    // 可以访问 不能设置
    readonly id: number, 

    // 可以访问 只能在类或者子类的内部修改 不能在外部修改
    protected username: string,

    // 外部包括子类不能访问，也不可修改
    private _password: string
    
  ) {
    // ...
  }


  // 寄存器 getter setter
  // 细节上控制password的长度
  set password(password: string) {
    if (password.length >= 6 ) {
      this.password = password
    }
  }

  get password(): string {
    return '****'
  }
}

class Vip2 extends User4 {

}


let user4 = new User4(12, 'ta', '2');
user4.password = '123'