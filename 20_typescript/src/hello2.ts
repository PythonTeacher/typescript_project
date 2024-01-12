console.log('Hello, Typescript');

var hello = 'hello';    // es5
let hello2 = 'hello2';  // es6
const hello3 = "HELLO";

// 구버전 브라우저도 호환되도록 es5 버전으로 변환됨
// es6로 변환하고 싶은 경우 tsc hello.ts --target es6

// Promise 추가 (es5에서 Promise가 많이 사용되자 ES6에서부터는 Promise가 표준 객체가 됨)
let timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1 sec");
  }, 1000);
});
timeoutPromise.then(console.log);

// tsc hello.ts -> es5로 컴파일하면 Promise를 못찾는다는 에러 발생
// Promise가 동작하기 위한 Library를 설정해주자
// tsc hello.ts --lib 'es2015.promise,es5,dom'

// 모듈 import
// es5의 모듈 시스템은 commonjs를 사용 (require구문)
import add, {sub} from './util.js';
console.log(add(10, 20));
console.log(sub(10, 20));

// target을 es6로 주면 es6의 module 시스템을 사용 (import구문)
// tsc hello.ts --lib 'es2015.promise,es5,dom' --target es6
// node hello.js로 실행하면 import에서 에러 발생

// target을 es6로 하면서 commonjs를 사용하려면?
// tsc hello.ts --lib 'es2015.promise,es5,dom' --target es6 --module commonjs

// 타입스크립트 컴파일 옵션보기
// tsc hello.ts --lib 'es2015.promise,es5,dom' --target es6 --module commonjs --showConfig

// 타입스크립트 컴파일러 설정파일 만들기
// tsconfig.json 설정
// tsc만 해도 됨
