// 5. 객체

// 객체 선언
let a = {}; // 빈객체
console.log(typeof a);

// 속성 추가
let person = {
  age: 27,
  name: "아이유",
};

// 템플릿 문자열
console.log(`age: ${person.age}, name: ${person.name}`);

// object 사용시 주의점
// shallow copy
let person2 = person;
person2.age = 30;

console.log('person', person);
console.log('person2', person2);

// deep copy
let person3 = {...person};  // 비구조화 할당
person3.age = 40;
console.log('person', person);
console.log('person3', person3);

// 메소드 추가
let person4 = { 
  age: 18,
  name: "홍길동",
  add: function() {
    this.age++;
  }
};

person4.add();
console.log(person4);

for (const key in person4) {
  console.log(`key: ${key}, value: ${person4[key]}`);
}

// 비구조화 할당
let { age, name } = person;
console.log(`age: ${age}, name: ${name}`);  // https://soap-so.tistory.com/47

let new_obj = { ...person, address: '안산' }; // spread operator
console.log(new_obj);