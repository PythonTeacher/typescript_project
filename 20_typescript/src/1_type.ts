// 1. Type

// 1) Implicit Type
// Type Checker가 타입을 추론 (Type Inference)
let a = "hello";
// a = 10;

// 2) Explicit Type
// :를 사용하여 명시적으로 타입을 정의하는 방식 (Type Annotation)

// number
let num: number = 10;   // 변수선언과 값 할당을 따로 해도 됨    
// num = "abc";

// string
let str: string = "hi";
// str = 10;

// boolean
let flag: boolean = false;      
// flag = "abc";

// array(object)
let arr: number[] = [1, 2, 3];  
// arr = [1, "2", false];
// arr.push("4");

let arr2: Array<number> = [1, 2, 3];

// tuple: 배열의 길이가 고정되고, 각 요소의 타입이 지정되어 있는 배열
let student: [number, string] = [3401, "홍길동"];
console.log(typeof student);       // tuple(object)
// student[0] = "abc";

// any: 모든 타입 허용 (모든 타입의 상위 타입)
// JS로 된 파일을 TS로 점진적으로 변경하고자 할때 사용 (그외에는 쓰지 말기)
let all: any = "hi";
all = 10;
all = [1, 2, 3];

// undefined, null 타입 (타입이면서 해당 타입의 유일한 값)
// undefined: 변수를 선언하고 값을 할당하지 않은 상태
// null: 해당 변수가 어떤 객체도 가리키고 있지 않음을 의도적으로 표현
let u: undefined = undefined;
let n: null = null;
console.log(typeof u);    // undefined type
console.log(typeof n);    // object type

// undefined와 null은 상위 타입에 할당 가능
num = undefined;
arr = null;

// void
function f(): void {
  // return 10;
}

// never: 함수의 끝에 절대 도달하지 않는다는 의미의 타입 (함수가 절대 리턴하지 않음)
function f2(num: number): never {
  // return 10;
  // while(true) {
 
  // }
  // if (num < 10) {
    throw new Error("error");
  // }
}

// 전역 실행 환경에서 돌아가지 않도록 모듈로 작성
export {};