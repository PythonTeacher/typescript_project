// 9. Class (클래스)

// 클래스 선언
// 속성 + 메소드로 구성
class Person {
  name: string;     // 속성, 인스턴스 변수
  age: number;
  constructor(name: string, age: number) {    // 생성자
    this.name = name;
    this.age = age;
  }
  introduce() {   // 인스턴스 메소드
    console.log(`저는 ${this.name} 이고, ${this.age} 살 입니다.`);
  }
}

const p: Person = new Person("아이유", 28);   // 객체 생성
p.name
p.age
p.introduce();

// 접근 제어자(Access Modifiers)
// - public : 어디에서나 접근 가능 (생략하면 public)
// - private : 클래스 내에서만 접근 가능
// - protected : 나와 자식 클래스에서만 접근 가능
class Person2 {
  public name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public introduce() {
    console.log(`저는 ${this.name} 이고, ${this.age} 살 입니다.`);
  }
}

const p2: Person2 = new Person2("아이유", 28);
p2.name
// p2.age
p2.introduce();


// static : 정적으로 사용 (객체와 무관, 클래스 레벨)
// readonly : 읽기 전용으로 사용 (속성에서만 사용), 조회만 가능
class Person3 {
  public readonly name: string;   // 인스턴스 변수 생성
  private age: number;
  public static count: number;    // 정적 변수
  constructor(name: string, age: number) {    // 초기화
    this.name = name;
    this.age = age;
  }
  public introduce() {       // 인스턴스 메소드
    console.log(`저는 ${this.name} 이고, ${this.age} 살 입니다.`);
  }
  public static hello() {    // 정적 메소드
    console.log('hello, world');
  }
}
const p3: Person3 = new Person3("아이유", 28);
// p3.name = "제니";
p3.introduce();
// p3.hello();
Person3.count;
Person3.hello();

// 좀더 간단히 사용하기
// 생성자에서 변수 앞에 접근제어자를 사용하면 바로 속성으로 정의됨
class Person4 {
  public static count: number;    // 정적 변수
  // 인스턴스 변수 생성 및 초기화
  constructor(public readonly name: string, private age: number) {}
  public introduce() {            // 인스턴스 메소드
    console.log(`저는 ${this.name} 이고, ${this.age} 살 입니다.`);
  }
  public static hello() {       // 정적 메소드
    console.log('hello, world');
  }
}
const p4: Person4 = new Person4("아이유", 28);
const p5: Person4 = new Person4("아이유", 28);
// p4.name = "제니";
p4.introduce();
Person4.hello();

class Count {
  private static count: number = 0;
  public constructor() {
    Count.count++;
  }
  public static getCount(): number {
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
  public static getInstance(): Singleton {
    if (this.obj == null) {
      this.obj = new Singleton();
    }
    return this.obj;
  }
}

const a = Singleton.getInstance();
const b = Singleton.getInstance();
const c = Singleton.getInstance();
console.log(Object.is(a, b));
console.log(Object.is(a, c));
console.log(Object.is(b, c));

export {}
