type IAllowFileTypeList = 'png'|'gif'|'jpg'|'jpeg'|'webp';

class User5 {
  // static定义静态类型 static必须在readonly之前
  static readonly ALLOW_FILE_TYPE_LIST: Array<IAllowFileTypeList> = ['png', 'gif', 'jpg', 'jpeg','webp']

  constructor(
    public id: number,
    public username: string,
    private _allowFileTypes: Array<IAllowFileTypeList>
  ) {
    // ...
  }

  // static 变成静态方法
  static info(): void {
    console.log( User5.ALLOW_FILE_TYPE_LIST )
    // console.log( this._allowFileTypes )
  }
}

let user5 = new User5( 2, 'md', ['png', 'gif'] )
console.log( this._allowFileTypes )

// 静态类型应该用类去访问 不能用具体的实例访问
User5.ALLOW_FILE_TYPE_LIST
User5.info()