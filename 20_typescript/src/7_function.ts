// 7. 함수

// 함수에 타입 적용 (Function Typing)

// function add(a: number, b: number): number {
//   return a + b;
// }

// 함수 매개변수와 리턴타입에 타입 설정
const add = (a: number, b: number): number => a + b;
add(10, 20);
// add(10, "20");
// add(10);
// add(10, 20, 30);

// ?: optional parameter
// 필수 매개 변수는 선택적 매개 변수 뒤에 올 수 없습니다.
const add2 = (a: number, b?: number): number => a + b;
console.log(add2(10));      // NaN 출력
console.log(add2(10, 20));  // 30

// default parameter
// 함수 type은 add2와 동일함
const add3 = (a: number, b: number=0): number => a + b;
console.log(add3(10));      // 10
console.log(add3(10, 30));  // 40


// 함수 타입 정의
// 1. Function Type Expression
// (매개변수 타입) => (반환값 타입)
// 함수의 내부를 알 수 없으므로 타입 추론이 불가능하며 반환 타입을 명시해야 함

// 객체 타입
const std: { age: number, name: string } = {
  age: 19,
  name: "홍길동"
};

const add4: (a: number, b: number) => number = (a, b) => a + b;
console.log(add4(10, 20));

// 2. Function Type Expression + Type Alias
type Calc = (a: number, b: number) => number;

const sub: Calc = (a, b) => a - b;
console.log(sub(10, 20));

// const mul: Calc = (a, b) => a * b;
// console.log(mul(10, 20));

// 3. Function Call Signature
// 객체 타입 안에 사용
// (매개변수 타입) : (반환값 타입)
const mul: {
  (a: number, b: number): number;
} = (a, b) => a * b;
console.log(mul(10, 20));

// 4. Function Call Signature + Type Alias
type Calc2 = {
  (a: number, b: number): number;
}

const div: Calc2 = (a, b) => a / b;
console.log(div(10, 20));


// 함수 오버로딩
// 하나의 함수가 서로 다른 여러개의 Call Signature를 가지는 경우
type MyAdd = {
  (a: number, b: number): number,
  (a: number, b: string): number
}

const add6: MyAdd = (a, b) => {
  if (typeof b === "string") {
    b = parseInt(b);
  }
  return a + b;    // Null 병합 연산자(??) : null 또는 undefined인 경우 0을 반환
}

console.log(add6(1, 2));
console.log(add6(1, "2"));


export {};

// 오버로딩 (Overloading)
// 라이브러리에서 많이 사용됨
// 함수가 서로 다른 여러개의 Call Signature를 가지는 경우
// (예) Next.js
// Router.push({ path: "/home", state: 1 });
// Router.push("/home");

type Config = {
  path: string,
  state: object
}

// 둘 중 하나를 호출
type Push = {
  (path: string): void,
  (config: Config): void
}

const push: Push = (config) => {
  if(typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
}