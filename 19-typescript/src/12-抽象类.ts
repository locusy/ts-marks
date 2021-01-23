/**
 * abstract修饰的方法不能有方法体
 * 如果一个类有抽象方法，那么该类也必须为抽象的
 * 如果一个类是抽象的，那么就不能用new实例化
 * 如果子类继承了一个抽象类，子类必须实现抽象类中的所有抽象方法，否则该类还得申明为抽象的
 */

abstract class Component<T1, T2> {
   props: T1;
   state: T2;

   constructor(props: T1) {
     this.props = props
   }

  //  render(): string {
  //    return ''6
  //  }

  abstract render(): string;
}



interface IMyComponentProps {
  val: number
}

interface IMyComponentState {
  x: number
}

class MyComponent extends Component<IMyComponentProps, IMyComponentState> {
  constructor(props: IMyComponentProps) {
    super(props)

    this.state = {
      x: 1
    }
  }

  render() {
    this.state.x
    this.props.val
    return 'my component'
  }
}

let mycomponent = new MyComponent({val: 1});
mycomponent.render();

