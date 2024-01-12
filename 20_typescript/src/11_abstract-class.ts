// 11. Abstract Class (추상 클래스)

// - 추상 클래스는 객체를 생성할 수 없다.
// - 추상 클래스에 정의된 추상 메소드는 반드시 자식 클래스에서 구현해야 한다. (강제화, 표준화)
abstract class Animal {
  constructor(public name: string) {}
  public getName() {              // getter
    return this.name;
  }
  public setName(name: string) {  // setter
    this.name = name;
  }
  public eat() {
    console.log("냠냠");
  }
  public abstract speak(): void;  // 추상메소드 (private 불가)
}

// const a2: Animal2 = new Animal2("동물");

class Dog extends Animal {
  public wag() {
    console.log("꼬리를 흔든다");
  }
  public speak() {            // 강제화
    console.log("멍멍");
  }
}

class Cat extends Animal {
  public purr() {
    console.log("가르릉 거린다");
  }
  public speak() {            // 강제화
    console.log("야옹");
  }
}

const animals: Animal[] = [new Dog("멍멍이2"), new Cat("야옹이2")];
animals.forEach(animal => animal.speak());      // 다형성


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