// a = 100;
// console.log(typeof a);

// let b = "hello";
// console.log(typeof b);

// b = true;
// console.log(typeof b);


const std: { id: number, name: string } = {
  id: 3301,
  name: "김디미"
}

const hello = (id: number, name: string): { id: number, name: string } => {
  return {
    id,
    name
  }
}

console.log(hello(3301, "김디미"));

// 숫자형 Enum
enum Dimigo {
  EB,
  DC,
  WP,
  HD
};

console.log(Dimigo.WP);   // 2
console.log(Dimigo[3]);   // HD

type Calc = {
  (a: number, b: number): number
}

const add: Calc = (a, b) => a + b;
const sub: Calc = (a, b) => a - b;

console.log(add(10, 20));
console.log(sub(10, 20));


type Person = {
  name: string,
  age: number
}

type Developer = {
  name: string,
  skill: string
}

type PD = Person | Developer;
let pd: PD;

// 2) Intersection 타입
// 여러개 타입을 하나로 합칠 때 사용
type PD2 = Person & Developer;
let pd2: PD2;


class Student {
  static school: string = "디미고";
  constructor(private id: number, private name: string) {}
  print() {
    console.log(`학번: ${this.id}, 이름: ${this.name}`);
  }
}

const s1 = new Student(3301, "홍길동");
s1.print();

const s2 = new Student(3401, "홍길서");
s2.print();

console.log(Student.school);


abstract class Animal {
  abstract speak(): void;
}

class Dog extends Animal {
  speak() {            // 강제화
    console.log("멍멍");
  }
}

class Cat extends Animal {
  speak() {            // 강제화
    console.log("야옹");
  }
}

const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach(animal => animal.speak());      // 다형성


interface IAnimal {
  speak(): void;
}

// 인터페이스에서 정한 규칙을 강제화하도록 함
class Dog2 implements IAnimal {  
  speak() {
    console.log("멍멍111");
  }
}

class Cat2 implements IAnimal {
  speak() {
    console.log("야옹111");
  }
}

const arr: IAnimal[] = [new Dog2(), new Cat2()];
arr.forEach(animal => animal.speak());      // 다형성


class Count {
  private static count: number = 0;
  constructor() {
    Count.count++;
  }
  static getCount(): number {
    return Count.count;
  }
}

new Count();
new Count();
new Count();
console.log(Count.getCount());


class Singleton {
  private static obj: Singleton = null;
  private constructor() {}
  static getInstance(): Singleton {
    if (Singleton.obj == null) {
      Singleton.obj = new Singleton();
    }
    return Singleton.obj;
    // Singleton.obj ??= new Singleton();
    return Singleton.obj;
  }
}

const a = Singleton.getInstance();
const b = Singleton.getInstance();
const c = Singleton.getInstance();
console.log(Object.is(a, b));
console.log(Object.is(a, c));
console.log(Object.is(b, c));

export {}