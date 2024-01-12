// 4. 함수

// 함수 선언
// 첫번째 방식 (클래식)
// a, b는 any 타입
function add(a, b) {
  return a + b;
}

// 함수 호출
console.log(add(2, 3));

// 두번째 방식 (익명함수)
const sub = function (a, b) {
  return a - b;
};

console.log(typeof sub);
console.log(sub(2, 3));

// 세번째 방식 : IIFE (즉시실행함수)
let result = function (a, b) {
  return a * b;
}(2, 3);

console.log(result);

// 네번째 방식 (화살표 함수)
const div = (a, b) => {
  return a / b;
};

const div2 = (a, b) => a / b;

console.log(div(6, 3));
console.log(div2(6, 3));