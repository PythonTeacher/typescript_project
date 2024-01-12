// 8. 모듈
// 코드관리와 유지보수를 위해 기능을 중심으로 모듈로 나누어 개발
// npm init으로 package.json 생성 (바로 생성 : npm init -y)
// "type": "module" 추가
import div, { add, sub, mul } from "./calc.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
console.log(div(1, 2));