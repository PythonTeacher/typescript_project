// 8. Union, Intersection 타입

// 1) Union 타입
// 여러 타입 중 하나가 들어올 수 있음

let nickname: string | number;
nickname = "천사";
nickname = 1004;
// nickname = false;

function log(msg: string | number) {
  console.log(msg);       // 공통 속성
  // 타입가드 처리
  if (typeof msg === "string") {
    msg.toLowerCase();
  } else {
    msg.toLocaleString();
  }
}
log("hi");
log(12);
// log(true);

type Person = {
  age: number,
  name: string
}

type Developer = {
  name: string,
  skill: string
}

type PersonDeveloper = Person | Developer;
let pd: PersonDeveloper;
pd.name;    // 공통 속성


// 2) Intersection 타입
// 여러개 타입을 하나로 합칠 때 사용
let a: string & number;
// a = 10;

type PersonDeveloper2 = Person & Developer;
let pd2: PersonDeveloper2;
pd2 = { age: 19, name: "나개발", skill: "TS"};

export {}


// function isDeveloper(target: Developer | Person): target is Developer {  
//   return (target as Developer).skill !== undefined;
// }

// function print(p: PersonDeveloper) {
//   p.name;
//   if (isDeveloper(p)) {
//     p.skill
//   } else {
//     p.age
//   }
// }

// let p: Person = { name: "홍길동", age: 20 };
// print(p);

// let d: Developer = { name: "나개발", skill: "Python" };
// print(d);

// // 2) Intersection 타입
// // 여러개 타입을 하나로 합칠 때 사용
// let possible: string & number;    // primitive type에서는 사용하지 않음 (never 타입)
// // possible = 10;

// type PersonDeveloper2 = Person & Developer;

// function print2(p: PersonDeveloper2): void {
//   console.log(p.name);
//   console.log(p.age);
//   console.log(p.skill);
// }

// // print2(p);
// // print2(d);
// let pd: PersonDeveloper2 = { age: 20, name: "나개발", skill: "Typescript"};
// print2(pd);

// export {}