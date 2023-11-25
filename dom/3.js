// document.createElement()
// 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환합니다.
const divEl = document.createElement('div');
console.log(divEl);

const inputEl = document.createElement('input')
console.log(inputEl);


// E.prepend() / E.append()
// 노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입합니다.

const parentEl = document.querySelector('.parent');
const el = document.createElement('div')
el.textContent = 'Hello'

parentEl.prepend(new Comment(' 주석 '));
parentEl.append(el, 'Text!!!!!');
// parentEl.remove();


// E.insertAdjacentElement()

// 대상 요소의 지정한 위치에 새로운 요소를 삽입합니다.
// 대상 요소.insertAdjacentElement(위치, 새로운 요소)