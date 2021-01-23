class Person {
  constructor(
    public name: string,
    public gender: '男'|'女',
    public age: number
  ) {
    // ...
  }

  getHobby(): string {
    return 'basketball'
  }
}


// class类默认定义了一个intreface Person
interface Person {
  name: string,
  gender: '男'|'女',
  age: number,
  getHobby(): string
}


let p: Person = new Person('tian', '男', 23)
p.getHobby()


interface PersonConstructor {
  new (name: string, gender: '男'|'女', age: number): Person,
  // type: string
}

// function fn1(arg: typeof Person ) {
function fn1(arg: PersonConstructor ) {
  new arg('tian', '男', 23)
}
fn1( Person )