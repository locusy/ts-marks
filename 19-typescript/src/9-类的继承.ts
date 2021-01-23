class User3 {
  // id: number
  // username: string 

  constructor(
    public id: number, 
    public username: string
  ) {
    // this.id = id;
    // this.username = username;
  }

  postArticle(title: string, content: string): void {
    console.log('title', title)
  }
}



class Vip extends User3 {
  constructor(
    public id: number, 
    public username: string,
    public score: number
  ) {
    super(id, username);
    // 必须在super调用之后访问this
    this.id
  }

  /**
   *  函数重写：重新实现了父类的方法，参数的个数和参数的类型一致
   */
  // postArticle(title: string, content: string): void {
  //   this.score++
  //   console.log('title', title)
  // }


  /**
   * 函数重载：参数个数，参数类型不同
   */
  postArticle(title: string, content: string): void;
  postArticle(title: string, content: string, file: string): void;
  postArticle(title: string, content: string, file?: string): void {
    // 用super调用父类的方法
    super.postArticle(title, content)

    if( file ) {
      this.postAttachment(file)
    }
  }


  postAttachment(file: string): void {
    console.log('file', file)
  }
}

let vip1 = new Vip(1, 'pear', 2)
vip1.postArticle('tea', 'cont')
vip1.postArticle('tea', 'cont', 'file')