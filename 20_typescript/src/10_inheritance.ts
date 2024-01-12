// 10. Inheritance (상속)

class Animal {
  // constructor(private name: string) {}
  constructor(protected name: string) {}
  public getName() {              // getter
    return this.name;
  }
  public setName(name: string) {  // setter
    this.name = name;
  }
  public eat() {
    console.log("냠냠");
  }
  public speak() {
    console.log("??");
  }
}

const a: Animal = new Animal("동물");
// a.name
console.log(a.getName());   // 동물
a.setName("동물2");
a.eat();                    // 냠냠
a.speak();                  // ??

// 자식클래스 extends 부모클래스
class Dog extends Animal {
  public wag() {      // Dog에만 있는 메소드
    console.log(this.name + "가 꼬리를 흔든다");
  }
  public speak() {    // 메소드 오버라이딩
    console.log("멍멍");
  }
}

class Cat extends Animal {
  public purr() {     // Cat에만 있는 메소드
    console.log(this.name + "가 가르릉 거린다");
  }
  public speak() {    // 메소드 오버라이딩
    console.log("야옹");
  }
}

const d: Dog = new Dog("멍멍이");
console.log(d.getName());   // 멍멍이
d.eat();                    // 냠냠
d.wag();                    // 꼬리를 흔든다
d.speak();                  // 멍멍

const c: Cat = new Cat("야옹이");
console.log(c.getName());   // 야옹이
c.eat();                    // 냠냠
c.purr();                   // 가르릉 거리다
c.speak();                  // 야옹

// 자식 클래스의 객체는 부모 클래스 타입으로 받을 수 있다.
const dog: Animal = new Dog("멍멍이");    // Upcasting
dog.speak();    // 멍멍 (동적 바인딩)

// 타입은 Animal 타입이므로 wag()는 보이지 않음
// wag()를 보이게 하려면 Dog으로 Casting
const dog2 = dog as Dog;                  // Downcasting
dog2.wag();

const cat: Animal = new Cat("야옹이");    // Upcasting
cat.speak();    // 야옹 (동적 바인딩)

const cat2 = cat as Cat;                  // Downcasting
cat2.purr();


// 상속에는 단일 상속과 다중 상속이 있다.
// TypeScript는 단일 상속을 채택함 (즉, 부모 클래스는 하나임)
// class DogCat extends Dog, Cat {

// }


export {}

// interface Person {
//   name: string;
//   say(message: string): void;
// }

// interface Programmer {
//   writeCode(requirement: string): string;
// }

// class Korean implements Person {
//   constructor(public name: string) {    
//   }
//   say(message: string): void {
//     console.log(message);
//   }
// }

// class KoreanProgrammer implements Person, Programmer {
//   constructor(public name: string) {    
//   }
//   say(message: string): void {
//     console.log(message);
//   }
//   writeCode(requirement: string): string {
//     console.log(requirement);
//     return "done";
//   }
//   loveKimchi() {
//     console.log('I love kimchi');
//   }
// }

// const jay = new KoreanProgrammer('jay');
// jay.loveKimchi();

// 추상클래스
// abstract class Korean implements Person {
//   public abstract jumin: string;
//   constructor(public name: string) {
//   }
//   say(msg: string) {
//     console.log(msg);
//   }
//   abstract loveKimchi(): void;
// }

// class KoreanProgrammer extends Korean implements Programmer {
//   constructor(public name: string, public jumin: string) {
//     super(name);
//   }
//   writeCode(requirement: string): string {
//     throw new Error("Method not implemented.");
//   }
//   loveKimchi(): void {
//     console.log('i love kimchi');
//   }
// }

// const jay2 = new KoreanProgrammer('jay', '111');
// const jay3 = new Korean('jay');