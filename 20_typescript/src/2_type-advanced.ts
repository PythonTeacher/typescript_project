// 2. Type Advanced

// 객체에서의 타입 정의
const std = {
  age: 19,
  name: "홍길동"
};
// 상수이므로 std에 다른 객체를 할당하는 것은 안됨
// std = {}

// 값 변경은 가능
// std.age = "20";
console.log(std);

// 객체 타입 선언
const std2: { age: number, name: string } = {
  age: 28,
  name: "아이유"
};

std2.age = 30;
std2.name = "제니";

// 함수에서의 타입 정의
function introduce(name: string): string {
  return `My name is ${name}.`;
}
const introduce2 = (name: string): string => {
  return `My name is ${name}.`;
}

console.log(introduce('IU'));

// 객체를 리턴하는 함수 정의
function func(age: number, name: string): { age: number, name: string } {
  return {
    age,
    name
  }
}
const func2 = (age: number, name: string): { age: number, name: string } => {
  return {
    age,
    name
  }
}

const result = func(19, "홍길동");
result.age
result.name

// array에 readonly 속성
const nums: readonly number[] = [1, 2, 3];
// nums.push(4);

// map, filter는 가능 (원본을 변경하지 않음)
console.log(nums.map(num => num + 1));
console.log(nums);

// tuple에 readonly 적용 (학번, 이름, 재학여부)
const person: readonly [number, string, boolean] = [3401, "홍길동", true];
// person[0] = 3402;

export {};