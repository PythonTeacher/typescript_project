// 5. Type Assertion (타입 단언)
// 타입스크립트에서 타입을 추론하지 않도록 강제로 지시하는 것
// 프로그래머가 타입스크립트보다 타입에 대해 더 잘 알고 있는 상황에서 사용

type Person = {
  name: string
}

const p: Person = { name: '홍길동' };     // 타입 선언 (: Type)
const p2 = { name: '홍길동' } as Person;  // 타입 단언 (as Type)

// 타입 단언을 사용하면 타입 체크 불가
// const p3: Person = {};   // 타입 체크
const p4 = {} as Person;    // 강제로 타입 지정했으니 Type Checker 오류 무시
p4.name

// 속성 추가
const p5: Person = {
  name: '홍길동',
  // age: 10
}

const p6 = {
  name: '홍길동',
  age: 10
} as Person;

// 타입 단언(as Type)
function func(val: string | number, isNumber: boolean) {
  if (isNumber) {
    // val.toFixed(2);
    (val as number).toFixed(2);   // 프로그래머가 타입스크립트에게 "나는 알고 있으니까 나를 믿어!"라고 알려주는 것과 같음
    (val as number).toLocaleString();
  } else {
    (val as string).split('');
    (val as string).toUpperCase();
    (val as string).length;
  }
}

// 타입 가드로 바꾸기
function isNumber(val: string | number): val is number {
  return typeof val === "number";
}

function func2(val: string | number) {
  if (isNumber(val)) {
    val.toFixed(2);
    val.toLocaleString();
  } else {
    val.split('');
    val.toUpperCase();
    val.length;
  }
}

// 4_type-guard에서 isDeveloper() 바꿔보기

export {}