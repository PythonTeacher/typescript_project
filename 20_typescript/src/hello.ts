// 타입스크립트를 사용하는 이유
// 1. 에러 사전 방지
const add = (a: number, b: number): number => a + b;

console.log(add(10, 20));
// console.log(add(10, "20"));
// console.log(add(10));
// console.log(add(10, 20, 30));

// add2();  // 없는 함수를 호출할 경우

// 2. 코드 가이드 및 자동완성 지원
const result = add(1000, 2000);
console.log(result.toLocaleString()); // 언어별로 구분하여 문자열을 반환 (천단위 콤마, 년월일)

export {}