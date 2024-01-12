// 6. 열거형(enum)
// TypeScript에서는 문자형 Enum과 숫자형 Enum을 지원

// 숫자형 Enum
enum Season {
  Spring = 1,
  Summer,     // 중간에 추가될 경우 자동 부여되는 값이 바뀔 수 있으므로 값을 설정해주는 것이 좋다.
  Fall,
  Winter
};

console.log(Season);    // 디폴트는 0, 1, 2, 3으로 값이 할당됨
console.log(Season.Spring);   // 1
console.log(Season["1"]);     // Spring

let s = Season.Spring;
console.log(s);  // 1

// 리버스 매핑 (거꾸로 값으로 키를 얻는 것)
console.log(Season[s]);   // Spring

// 문자형 Enum
enum Direction {
  East = "E",
  West = "W",
  South = "S",
  North = "N"
};
console.log(Direction);

let d = Direction.East;
console.log(d);   // E

// 문자형 Enum은 리버스 매핑 지원이 안됨
// Direction[d];

export {};