// Javascript는 타입체크가 엄격하지 않음
let a = "hello";
a = 10;
console.log(typeof a);

const add = function (a, b) { return a + b; };
console.log(add(10, 20));
console.log(add(10, "20"));
console.log(add(10, 20, 30));
console.log(add(10, [20, 30]));
// add2();  // 없는 함수를 호출할 경우

// 2. 코드 가이드 및 자동완성 지원
let result = add(1000, 2000);
console.log(result.toLocaleString()); // 언어별로 구분하여 문자열을 반환 (천단위 콤마, 년월일)

let num = 1000;
num.toLocaleString();