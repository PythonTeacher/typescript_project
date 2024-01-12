// 2. 변수

// 변수 선언
// var -> let, const
let a = 10;   // 동적 타이핑
console.log(typeof a);

a = 'hello';
console.log(typeof a);

console.log(a + 'world');
console.log(10 + '20');

// 자료형 확인
console.log(typeof 10);
console.log(typeof 'abc');
console.log(typeof true);
console.log(typeof []);
console.log(typeof {});
console.log(typeof t);

// 값 비교
console.log(10 == '10');  // 값만 비교, 강제 형변환 (문자열->숫자)
console.log(10 === '10'); // 값과 타입까지 비교

// var vs let
// var : 함수 레벨 스코프, 중복 선언 가능 let : 블록 레벨 스코프, 중복 선언 불가
function test() {
  if (true) {
    var value = 0;
    console.log('1:', value);
  }
  console.log('2:', value);   // 함수 전체에서 접근 가능

  // var는 for문이 다 돌고 나서야 setTimeout이 실행
  // 비동기 방식이므로 100ms 후에는 이미 2까지 증가된 상태
  // let으로 바꿔도 역시 for문이 다 돌고 나서야 setTimeout이 실행
  // 단, setTimeout 실행 시 i값을 for문의 스코프 안에서 찾음
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 100);
  }
}
test();

// const : 상수, 블록 레벨 스코프
let v1 = 1;
const v2 = 1;
v1++;
// v2++;