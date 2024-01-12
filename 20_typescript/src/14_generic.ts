// 14. Generic (제네릭)

// 한가지 타입보다 여러 타입에서 동작하는 코드를 작성할 때 사용
// 코드의 재사용성이 높아짐
// 직접 만드는 경우보다 제네릭으로 만들어진 코드를 사용하는 경우가 많음

// string, number 타입의 매개변수를 입력받아 출력하는 함수 작성하기
// 다른 타입까지 허용하고 싶으면? any?
function func(param: string | number): string | number {
  console.log(param);
  return param;
}

func("hello");
func(123);
// func(true);

// 제네릭으로 작성하기
// Generic: 타입의 Placeholder 같은 것
function func2<T>(param: T): T {
  console.log(param);
  return param;
}

func2("hello");
func2(123);
func2(true);

func2<string>("hello");
func2<number>(123);
func2<boolean>(true);

// 배열을 입력받아 출력해주는 함수 만들기
// function arrPrint(arr: string[] | number[]) {}
function arrayPrint<T>(arr: T[]) {
// function arrayPrint<T>(arr: Array<T>) {
  console.log(arr);
}

arrayPrint(["a", "b", "c"]);
arrayPrint([1, 2, 3]);
arrayPrint(["hi", 100]);

// 첫번째 원소를 리턴하게 하기
function arrayPrint2<T>(arr: T[]): T {
  return arr[0];
}

const a = arrayPrint2<number>([1, 2, 3]);
const b = arrayPrint2<boolean>([true, false, true]);
const c = arrayPrint2(["a", "b", "c"]);
const d = arrayPrint2(["hi", 100, true]);
console.log(a, b, c, d);

// Generic 2개 사용하기
function arrayPrint3<T, V>(arr: T[], b: V): T {
  console.log(arr, b);
  return arr[0];
}

arrayPrint3<number, string>([1, 2, 3], "hello");
arrayPrint3<boolean, number>([true, false, true], 10);
arrayPrint3(["a", "b", "c"], true);
arrayPrint3(["hi", 100], true);


// 인덱스 시그니처 (Index Signature)

// 객체의 타입을 정의할 때 interface 사용
// interface IPerson2 {
//   name: string,
//   age: number
// }

interface IPerson<T> {
  [key: string]: T;
}

const p: IPerson<string | number> = {
  name: "홍길동",
  age: 19,
  phone: "111-222-3333",
  address: "안산시"
}

console.log(p.name, p.age);
console.log(p.phone, p.address);


export {}

// ToDo
// function createPromise<T>(x: T, timeout: number) {
//   return new Promise<T>((resolve, reject) => {
//     setTimeout(() => {
//       resolve(x);
//     }, timeout);
//   });
// }

// createPromise<string>("hello", 100)
//   .then(v => console.log(v));   // v는 string

// createPromise(10, 100)
//   .then(v => console.log(v));   // v는 number


// function createTuple2<T, U>(v: T, v2: U): [T, U] {
//   return [v, v2];
// }

// const t1 = createTuple2("user1", 1000);
// t1[0]   // 문자열
// t1[1]   // 숫자

// function createTuple3<T, U, D>(v: T, v2: U, v3:D): [T, U, D] {
//   return [v, v2, v3];
// }

// // User타입만 저장할 수 있는 LocalDB
// class LocalDB {
//   constructor(private localStorageKey: string) {

//   }
//   add(v: User) {
//     localStorage.setItem(this.localStorageKey, JSON.stringify(v));
//   }
//   get(): User {
//     const v = localStorage.getItem(this.localStorageKey);
//     return (v) ? JSON.parse(v) : null;
//   }
// }

// interface User { name: string }

// const userDb = new LocalDB("user");
// userDb.add({ name: "jay" });
// const userA = userDb.get();
// userA.name

// // 다른 타입들도 저장할 수 있는 LocalDB
// class LocalDB2<T> {
//   constructor(private localStorageKey: string) {

//   }
//   add(v: T) {
//     localStorage.setItem(this.localStorageKey, JSON.stringify(v));
//   }
//   get(): T {
//     const v = localStorage.getItem(this.localStorageKey);
//     return (v) ? JSON.parse(v) : null;
//   }
// }

// interface Product2 { id: string };

// const userDb2 = new LocalDB2<Product2>("product");
// userDb2.add({ id: "111" });


// // 인터페이스로 만들기
// interface DB<T> {
//   add(v: T): void;
//   get(): T;
// }

// class LocalDB3<T> implements DB<T> {
//   add(v: T): void {
//     throw new Error("Method not implemented.");
//   }
//   get(): T {
//     throw new Error("Method not implemented.");
//   }
// }

// // 하위 타입으로 고정
// interface JSONSerializer {
//   serialize(): string;
// }

// class LocalDB4<T extends JSONSerializer> implements DB<T> {
//   add(v: T): void {
//     v.serialize();
//   }
//   get(): T {
//     throw new Error("Method not implemented.");
//   }
// }

// // 조건부 타입
// interface Vegitable {
//   v: string;
// }
// interface Meat {
//   m: string;
// }
// interface Cart<T> {
//   getItem(): T extends Vegitable ? Vegitable : Meat
// }

// const cart1: Cart<Vegitable> = {
//   getItem() {
//     return {
//       v: ''
//     }
//   }
// }

// cart1.getItem().v