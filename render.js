function f(nodeName, attributes, ...args){
  let children = args.length ? [].concat(...args) : null;
  return { nodeName, attributes, children };
}

function render(vnode){
  // 转换成 #text节点
  if(vnode.split) return document.createTextNode(vnode);
  
  // 创建一个带有VDOM元素节点名的DOM 元素
  let n = document.createElment(vnode.nodeName);
  
  // 拷贝属性到新的节点
  let a = vnode.attributes || {};
  Object.keys(a).forEach( k => n.setAttributes(k, a[k]);
  
  // 渲染并且添加子节点                      
  (vnode.children || []).forEach(c => n.appendChild(render(c)));
  return n;
}

let vdom = <div id="foo">Hello!</div>

let dom = render(vdom);

document.body.appendChild(dom);

