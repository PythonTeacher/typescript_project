// 6. 클래스
class Animal {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`${this.name}이 말을 한다`);
  }
}

const a = new Animal('동물');
a.say();

class Dog extends Animal {
  say() {
    console.log(`${this.name}가 멍멍한다`);
  }
}

class Cat extends Animal {
  say() {
    console.log(`${this.name}가 야옹한다`);
  }
}

const animals = [new Dog('멍멍이'), new Cat('야옹이')];
animals.forEach(animal => animal.say());
// animals.map(animal => animal.say());

export { Dog, Cat };