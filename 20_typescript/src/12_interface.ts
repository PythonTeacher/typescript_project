// 3. 인터페이스
// 상호간에 정의한 약속 혹은 규칙

// 1. 객체 타입 정의
// - 속성과 속성의 타입
const p: { name: string, age: number } = { name: "아이유", age: 28 };

// 1) Type Alias
type Person = {
  readonly name: string,    // readonly properties
  age?: number              // optional properties
}

const p2: Person = { name: "아이유", age: 28 };
// p2.name = "제니";

const printPerson = (obj: Person) => {
  console.log(obj.age, obj.name);
}
printPerson(p2);

// 2) Interface
interface IPerson {
  readonly name: string;    // readonly properties
  age?: number;             // optional properties
}

const p3: IPerson = { name: "아이유", age: 28 };
// p3.name = "제니";

const printPerson2 = (obj: IPerson) => {
  console.log(obj.age, obj.name);
}
printPerson2(p3);


// 2. 함수 타입 정의
// - 매개변수와 리턴 타입

// 1) Function Call Signature + Type Alias
type Person2 = {
  name: string,
  age: number,
  introduce(p: Person2): void;
}

const introduce = (p: Person2) => {
  console.log(`저는 ${p.name}이고, ${p.age}살 입니다.`);
}

const p4: Person2 = { name: "홍길동", age: 19, introduce };
introduce(p4);    // p4.introduce(p4);도 동일


// 2) Interface
interface IPerson2 {
  name: string,
  age: number,
  introduce2(p: IPerson2): void;
}

const introduce2 = (p: IPerson2) => {
  console.log(`저는 ${p.name}이고, ${p.age}살 입니다.`);
}

const p5: IPerson2 = { name: "홍길순", age: 20, introduce2 };
introduce2(p5);


// 2. Type vs Interface
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

// 1) 확장(Extending)
type Animal = {
  name: string;
}

type Dog = Animal & {   // intersection을 이용한 확장
  walking: boolean;
}

const dog: Dog = { name: "멍멍이", walking: true };
console.log(dog.name);
console.log(dog.walking);


interface IAnimal {
  name: string;
}

interface IDog extends IAnimal {
  walking: boolean;
}

const dog2: IDog = { name: "멍멍이", walking: false };
console.log(dog2.name);
console.log(dog2.walking);

// 2) 새로운 속성 추가
type Cat = {
  name: string;
}

// type Cat = {     // 한번 생성된 이후로는 변경 불가
//   scratching: boolean;
// }

interface ICat {
  name: string;
}

interface ICat {    // 같은 이름의 interface가 있으면 하나로 합쳐줌
  scratching: boolean;
}

const cat: ICat = { name: "야옹이", scratching: true };
console.log(cat.name);
console.log(cat.scratching);


// Type Alias : 인터페이스에 비해 활용도는 높음
type NickName = string;
// interface INickName = string;

// 특정 값 제한
type Team = "red" | "blue" | "yellow";
// interface ITeam = "red" | "blue" | "yellow";
const t: Team = "blue";


// 어떨때 Type Alias를 쓰고, 어떨때 interface를 써야 하나?

// 클래스나 객체의 타입을 정의하고자 할 때는 interface를 쓰기 (OOP)
// 그 밖의 경우는 Type Alias을 쓰라고 TS 커뮤니티에서 말하고 있음

// interface는 TS에만 있는 문법으로 JS 코드로 컴파일 되지 않음


// To Do
// 인터페이스의 속성들을 추가로 사용하고자 할 때
type Person3 = {
  name: string;
  [propname: string]: any;
}

interface IPerson3 {
  name: string;
  [propname: string]: any;
}

const p6: Person3 = { name: "아이유", age: 28, address: "안산" };
console.log(`${p6.name}, ${p6.age}, ${p6.address}`);

const p7: IPerson3 = { name: "아이유", age: 28, address: "안산" };
console.log(`${p7.name}, ${p7.age}, ${p7.address}`);


export {}


// // interface Hello = string;
// // 클래스나 객체의 타입을 모양을 정의하고자 할 때는 interface를 쓰기 (OOP)
// // 그 밖의 경우는 Type을 쓰라고 TS 커뮤니티에서 말하고 있음
// // TS에만 있는 문법으로 JS 코드로 컴파일 되지 않음
// interface IPlayer {
//   readonly nickName: NickName,
//   team: Team
//   healthBar: HeadthBar  
// }

// // const pp = new IPlayer();

// const p2: IPlayer = {
//   nickName: "농구천재",
//   team: "red",
//   healthBar: 1
// }
// // p2.nickName = "aaa";

// // 같은 이름의 interface가 있으면 하나로 합쳐줌
// interface User {
//   firstName: string;
// }

// interface User {
//   lastName: string;
// }

// interface User {
//   nickName: string;
// }
// const user: User = {
//   firstName: "",
//   lastName: "",
//   nickName: ""
// }

// interface IUser2 {
//   firstName: string,
//   lastName: string,
//   fullName(): string,
//   sayHi(name: string): string
// }

// interface Human {
//   health: number
// }

// class Player2 implements IUser2, Human {
//   constructor(
//     public firstName: string,   // 인터페이스를 구현한 클래스에서 private, protected는 안됨
//     public lastName: string,
//     public health: number
//   ) {}
//   fullName(): string {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   sayHi(name: string): string {
//     return `Hello ${name}`;
//   }
// }



// // 인터페이스의 속성들을 추가로 사용하고자 할 때
// interface IPerson4 {
//   age: number;
//   [propname: string]: any;
// }

// let person5: IPerson4 = { age: 28, name: "아이유", address: "안산" };
// console.log(person5);

// // 함수의 스펙 (파라미터, 반환 타입) 정의
// interface ITV {
//   turnOn(ch: number): boolean;
//   turnOff(): void;
// }

// // 클래스로 인터페이스 구현
// class TV implements ITV {
//   turnOn(ch: number): boolean {
//     console.log(`TV가 켜졌습니다. 채널번호: ${ch}`);
//     return true;
//   }
//   turnOff(): void {
//     console.log("TV가 꺼졌습니다");
//   }
// }

// const myTV = new TV();
// myTV.turnOn(7);
// myTV.turnOff();


// // 인터페이스 확장
// // 클래스처럼 인터페이스간 확장이 가능함
// interface IDeveloper extends IPerson {
//   skill: string;
// }

// let dev: IDeveloper = { 
//   age: 30, 
//   name: "홍길동", 
//   skill: "TypeScript" 
// };
// console.log(dev);

// let dev2 = {} as IDeveloper;
// dev2.age = 30;
// dev2.name = "홍길동";
// dev2.skill = "TypeScript";
// console.log(dev2);


// export {};

// // ToDo
// const myTV2: TV = {
//   turnOn() {
//     return true;
//   },
//   turnOff() {
    
//   },
// }

// function tryTurnOn(tv: TV) {
//   tv.turnOn(7);
// }

// tryTurnOn(myTV);

// interface Cell {
//   row: number;
//   col: number;
//   piece?: Piece;
// }

// interface Piece {
//   move(from: Cell, to: Cell): boolean;
// }

// function createBoard() {
//   const cells: Cell[] = [];
//   for (let row = 0; row < 4; row++) {
//     for (let col = 0; col < 3; col++) {
//       cells.push({ row, col })
//     }
//   }
//   return cells;
//  }

//  const board = createBoard();
//  board[0].piece = {
//   move(from: Cell, to: Cell) {
//     return true;
//   }
//  }

//  interface SignUp {
//   email: string,
//   id: string,
//   password: string
//  }

//  function ajaxSignup(data: SignUp) {

//  }

//  ajaxSignup({
//   email: 'aa',
//   id: 'bb',
//   password: 'cc'
//  })