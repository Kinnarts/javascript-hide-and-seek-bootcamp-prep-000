function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('#nested .target')
}
function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}
var deep = 0
var deepestElem
function deepestChild() {
  return recursiveChild(document.querySelector('div#grand-node'), deep, deepestElem)
}
function recursiveChild(elem, deep, deepestChild){
  var innerdeep = 0
  for (var i = 0; i < elem.children.length; i++) {
    elem.children[i]
    if (elem.children[i]) {
      innerdeep++
      if (innerdeep > deep) {
        deep = innerdeep
        deepestElem = elem.children[i]
        recursiveChild(elem.children[i],deep,deepestElem)
      }
    }
  }
  return deepestElem
}
