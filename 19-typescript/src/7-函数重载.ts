// 同一函数会接收不同类型的参数 返回不同类型的返回值

/**
 *  混合参数和返回值混合在一起的写法 行不通？
 */
// function showOrHide(el: HTMLElement, attr: 'display'|'opacity', value: 'block'|'none'|number) {}


/**
 *  重载函数类型只需要定义结构，不需要实体，类似接口
 */
function showOrHide(el: HTMLElement, attr: 'display', value: 'block'|'none');
function showOrHide(el: HTMLElement, attr: 'opacity', value: number);
function showOrHide(el: HTMLElement, attr: any, value: any) {
  // ...
}


let div8 = document.querySelector('div')
if ( div8 ) {
  showOrHide(div8, 'display', 'block')
  showOrHide(div8, 'display', 'none')
  showOrHide(div8, 'opacity', 1)
}