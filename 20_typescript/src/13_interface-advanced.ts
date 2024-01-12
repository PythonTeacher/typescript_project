// 13. Interface Advanced

// 클래스의 타입을 정의할 때는 Interface를 쓰자

interface IAnimal {
  name: string;
  eat(): void;
  speak(): void;
}

// 인터페이스에서 정한 규칙을 강제화하도록 함
class Dog implements IAnimal {
  // constructor(private name: string) {}
  constructor(public name: string) {}   // 인터페이스를 구현한 클래스에서는 private, protected는 안됨
  eat(): void {
    console.log("냠냠");
  }
  speak(): void {
    console.log("멍멍");
  }
}

// const d: IAnimal = new IAnimal();
const d = new Dog("멍멍이");
d.eat();      // 냠냠
d.speak();    // 멍멍

class Cat implements IAnimal {
  constructor(public name: string) {}   
  eat() {
    console.log("냠냠");
  }
  speak() {
    console.log("야옹");
  }
}

const c = new Cat("야옹이");
c.eat();      // 냠냠
c.speak();    // 야옹

const animals: IAnimal[] = [
  new Dog("멍멍이"), new Cat("야옹이")
];      // Upcasting

animals.forEach(animal => animal.speak());    // 다형성

// 중복되는 부분이 보인다
// 상속과 구현을 같이 쓰는 것도 가능
// 아래처럼 해보고 Animal impelments IAnimal로 바꿔보기
class Animal {
  constructor(public name: string) {}   
  eat() {
    console.log("냠냠");
  }
}

class Dog2 extends Animal implements IAnimal {
  constructor(name: string, public walking: boolean) {
    super(name);    // 부모 클래스의 생성자 호출
  }
  speak(): void {
    console.log("멍멍2");
  }
}

class Cat2 extends Animal implements IAnimal {
  constructor(name: string, public scratching: boolean) {
    super(name);
  }
  speak(): void {
    console.log("야옹2");
  }
}

const d2 = new Dog2("멍멍이", true);


// Abstract class vs Interface
// 1) 공통점
// - 둘다 직접 객체를 생성할 수 없음
//   (new 인터페이스, new 추상클래스 불가)
//   객체를 생성하려면 인터페이스를 구현한 클래스로, 
//   추상클래스를 상속한 클래스로 객체 생성
// - 둘다 강제화가 가능 (반드시 하위 클래스에서 구현해 주어야 함)
//   추상클래스는 추상메소드를 선언, 
//   인터페이스의 모든 메소드는 추상메소드

// 2) 차이점
// - 추상클래스는 메소드 구현이 가능, 인터페이스는 불가
// - 인터페이스는 구현 클래스의 접근제어자로 public만 가능
// - TypeScript는 단일 상속이므로, 하나의 클래스만 상속 받을 수 있음.
//   인터페이스는 여러 인터페이스를 동시에 implements할 수 있음

interface IPerson {
  name: string;
  hello(): void;
}

interface IDeveloper {
  skill: string;
  work(): void;
}

class Developer implements IPerson, IDeveloper {
  constructor(public name: string, public skill: string) {}
  hello(): void {
    console.log(`저는 ${this.name}입니다.`);
  }
  work(): void {
    console.log(`${this.skill}을 하고 있습니다.`);
  }
}

const dev = new Developer("나개발", "타입스크립트");
dev.hello();
dev.work();


export {}