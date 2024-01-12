// 인덱스 타입
interface Props {
  name: string;
  [key: string]: string;    // key 타입은 string or number만 가능
}

const p: Props = {
  name: 'jay',
  a: 'a',
  b: 'b',
  // c: 3,
  0: 'd',
  1: 'b'
}

p.name
p.a
p[0]
p.asdf

interface User {
  name: string,
  age: number,
  hello(msg: string): void;
}

let keysOfUser: keyof User;
keysOfUser = "age"    // 키들만 할당

let helloMethod: User["hello"];
helloMethod = function(msg: string) {
  
}


// 사전 만들기
interface Words {
  [key: string]: string
}

class Dict {
  private words: Words;
  constructor() {
    this.words = {}   // 직접 초기화
  }
  add(word: Word) {   // 클래스를 타입으로 사용
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def
    }
  }
  getDef(term: string) {
    return this.words[term];
  }
  update(word: Word) {
    if (this.words[word.term]) {
      this.words[word.term] = word.def
    }
  }
  delete(term: string) {
    if (this.words[term]) {
      delete this.words[term];
    }
  }
  printAllWords() {
    let terms = Object.keys(this.words);
    for (const term of terms) {
      console.log(term, this.words[term]);
    }
  }
}

class Word {
  constructor(
    public term: string,
    public def: string
  ) {}
}

const dict = new Dict();
const kimchi = new Word("kimchi", "한국 대표음식");

dict.add(kimchi);
console.log(dict.getDef("kimchi"));
dict.printAllWords();

dict.update(new Word("kimchi", "한국의 매운 대표음식"));
console.log(dict.getDef("kimchi"));
dict.printAllWords();

dict.delete("kimchi");
console.log(dict.getDef("kimchi"));
dict.printAllWords();

export {}