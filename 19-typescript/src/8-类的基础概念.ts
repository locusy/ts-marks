/*
  1、类的构造函数、成员属性、成员方法定义
  2、ts定义类的参数
*/


/*****************************  1、类的构造函数、成员属性、成员方法定义 ****************************/
class User {
  // 类的成员属性定义
  id: number
  username: string 

  // 构造函数：创建类，当类通过new实例化的时候，就会执行该函数
  constructor(id: number, username: string) {
    this.id = id;
    this.username = username;
  }

  // 类的成员方法定义
  postArticle(title: string): void {
    console.log('title', title)
  }
}

let user3 = new User(1, 'apple');
user3.postArticle('wenzhang')



/*****************************  2、ts定义类的参数 ****************************/
class User1 {
  // id: number
  // username: string 

  /**
   * 当我们给构造函数参数设置了访问修饰符：public，那么ts会做如下两件事情：
   * - 给当前类添加同名的成员属性
   * - 在类的实例化的时候，会把传入的值赋值给对应的成员属性
   */
  constructor(
    public id: number, 
    public username: string
  ) {
    // this.id = id;
    // this.username = username;
  }
}