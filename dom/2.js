// document.getElementById()
// HTML id 속성 값으로 검색한 요소를 반환합니다.
// 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환합니다.
// 검색 결과가 없으면, null을 반환합니다.


// const element = document.getElementById('child2');
// console.log(element);
//
// const wrongElement = document.getElementById('child');
// console.log(wrongElement);


// document.querySelector()
// CSS 선택자로 검색한 요소를 하나 반환합니다.
// 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환합니다.
// 검색 결과가 없으면, 'null'읇 반환합니다.

// const el = document.querySelector(('.child:first-child'));
// console.log(el);


// document.querySelectorAll()
// 'CSS 선택자'로 검색한 모든 요소를 'NodeList'로 반환합니다.
// 'NodeList' 객체는 '.forEach()'를 사용할 수 있습니다.

const nodeList = document.querySelectorAll('.child')
console.log(nodeList);
nodeList.forEach(el => console.log(el.textContent));
console.log(Array.from(nodeList).reverse());

// N.parentElement
// 노드의 부모 요소를 반환합니다. 노드는 요소의 상위 개념
let el = document.querySelector('.child');
console.log(el.parentElement);

// E.closest()
// 요소 자신을 포함한 조상 요소 중 'CSS 선택자'와 일치하는,
// 가장 가까운 요소를 반환합니다.
// 요소를 찾지 못하면, 'null'을 반환합니다.

el = document.querySelector('.child')
console.log(el.closest('div'));
console.log(el.closest('body'));
console.log(el.closest('.hello'));

// N.previousSibling / N.nextSibling
// 노드의 이전 형제 혹은 다음 형제 노드를 반환합니다.
el = document.querySelector('.child');
console.log(el.previousSibling);
console.log(el.nextSibling);

// E.previousElementSibling / E.nextElementSibling
// 요소의 이전 형제 혹은 다음 형제 요소를 반환합니다.
el = document.querySelector('.child');
console.log(el.previousElementSibling);
console.log(el.nextElementSibling);

// E.children
// 요소의 모든 자식 요소를 반환합니다.
el = document.querySelector('.parent')
console.log(el.children)
console.log(Array.from(el.children))

// E.firstElementChild / E.LastElementChild
// 요소의 첫 번째 자식 혹은 마지막 자식 요소를 반환합니다.
el = document.querySelector('.parent')
console.log(el.firstElementChild);
console.log(el.lastElementChild);