// 3. Type Alias (타입 별칭)
// type 키워드를 사용하여 새로운 타입을 만드는 것
// 이미 존재하는 타입에 다른 이름을 붙여 복잡한 타입을 간단하게 만들 수 있음

// 객체 타입
const p: { age: number, name: string } = {
  age: 28,
  name: "아이유"
}

type Person = {
  age: number,
  name: string
}

const person: Person = {
  age: 28,
  name: "아이유"
}

type AgeType = number;
type NameType = string;

type Person2 = {
  age: AgeType,
  name: NameType
}

const person2: Person2 = {
  age: 25,
  name: "제니"
}

// 함수 타입
function func(person: { age: number, name: string }): { age: number, name: string } {
  return {
    age: person.age,
    name: person.name
  }
}

function func2(person: Person): Person {
  return {
    age: person.age,
    name: person.name
  }
}

// optional, readonly
type Person3 = {
  age?: number,           // optional   
  readonly name: string   // readonly
}

const person3: Person3 = {
  name: "제니"
};
// person3.name = "지니";

// 하나의 타입이 아니라 동시에 여러개의 타입을 지정하고자 할 경우
// 유니온 타입 지정
type StrNumType = string | number;
let nickname: StrNumType;
nickname = "천사";
nickname = 1004;
// nickname = true;

// 타입 뿐만 아니라 문자열, 숫자리터럴 값도 유니온으로 지정
type LangType = "Python" | "Java" | "Typescript";
type LevelType = 1 | 2 | 3;

type Developer = {
  nickName: StrNumType,
  lang: LangType,
  level: LevelType
}

const d: Developer = {
  nickName: "천재개발자",
  lang: "Typescript",
  level: 3
}

export {}

// interface User {
//   name: string;
// }

// interface Action {
//   do(): void;
// }

// type UserAction = User & Action;

// function createUserAction2(): UserAction {
//   return {
//     name: '',
//     do() {}
//   }
// }

// type StringOrNumber = string | number;
// type Arr<T> = T[];
// type P<T> = Promise<T>;

// type User2 = {
//   name: string;
//   login(): boolean;
// }

// // 타입도 implements 할 수 있음
// class UserImpl implements User2 {
//   name: string;
//   login(): boolean {
//     throw new Error("Method not implemented.");
//   }
// }

// type UserState = "PENDING" | "APPROVED" | "REJECTED";

// function checkUser(user: User2): UserState {
//   if (user.login()) {
//     return "APPROVED";
//   } else {
//     return "REJECTED";
//   }
// }