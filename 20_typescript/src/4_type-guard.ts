// 4. Type Guard (타입 가드)
// 컴파일러가 타입을 추론할 수 있도록 코드를 작성하는 방법

let all: any = "hi";
all = 10;
all = [1, 2, 3];
  
// typeof: primitive type을 비교할 경우
function func(param: any) {
// function func(param: number | string) {
  if (typeof param === "number") {
    return param.toString();
  }
  if (typeof param === "string") {
    return param.toUpperCase();
  }
  throw new Error('unsupported type');
}

func(10);
func("hello");
// func(true);

// instanceof: 객체 type을 비교할 경우
class Dog {
  name = "멍멍이";
  walking = true;
}

class Cat {
  name = "야옹이";
  scratching = false;
}

function doStuff(animal: Dog | Cat) {
  console.log(animal.name);
  if (animal instanceof Dog) {
    console.log(animal.walking);
  } else {
    console.log(animal.scratching);
  }  
}

doStuff(new Dog());
doStuff(new Cat());


// in: 객체 내부에 특정 property가 있는지 확인하는 연산자
type Student = {
  stdId: string,
  name: string
}

type Adult = {
  juminNo: string,
  name: string
}

function doStuff2(person: Student | Adult) {
  console.log(person.name);
  if ("stdId" in person) {
    console.log(person.stdId);
  } else {
    console.log(person.juminNo);
  }
}

doStuff2({ stdId: "3401", name: "홍길동" });
doStuff2({ juminNo: "123456", name: "홍길순" });

// 사용자 정의 타입 가드
type Person = {
  age: number,
  name: string
}

type Developer = {
  name: string,
  skill: string
}

function isDeveloper(target: Developer | Person): target is Developer {  
  return "skill" in target;
  // return (target as Developer).skill !== undefined;
}

function print(p: Developer | Person) {
  console.log(p.name);
  if (isDeveloper(p)) {
    console.log(p.skill);
  } else {
    console.log(p.age);
  }
}

const d: Developer = {
  name: "나개발",
  skill: "Typescript"
}

const p: Person = {
  name: "나사람",
  age: 30
}

print(d);
print(p);

export {}