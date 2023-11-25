// DOM (Document Object Model)

// DOM이란 HTML 문서를 객체로 표현한 것으로,
// JS에서 HTML을 제어할 수 있게 해줍니다.

const element = document.querySelector('h1');
console.log(element.textContent);


// NODE VS ELEMENT

// 노드 (Node): HTML 요소, 텍스트, 주석 등 모든 것을 의미
// 요소 (Element): HTML 요소를 의미

const parent = document.querySelector('.parent');

console.log(parent.childNodes);
console.log(parent.children);
console.log(parent);
// console.dir(parent);

class N {}
class E extends N {}

console.dir(E)
console.dir(N)
console.dir(E.__proto__)

console.dir(Element)
console.dir(Node)
console.dir(Element.__proto__)