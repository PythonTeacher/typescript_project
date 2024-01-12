// 3. 배열

// 배열 선언
let arr = [1, 2, 3, 4, 5];

console.log(arr.length); // 5
console.log(arr[2]); // 3

let arr2 = [1, 2, "apple", "banana"];

console.log(arr2[2]);

// 반복문 사용하기
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for-in
for (let i in arr) {
  console.log(i + ':' + arr[i]); // i는 인덱스
}

// for-of (ES6에 추가)
for (let i of arr) {
  console.log(i); // i는 원소값
}

// for-each
arr.forEach(function (item, index) {
  console.log(index + ':' + item);
});

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

// 배열 함수 (map, filter)
let result = arr.map((num) => num ** 2);
console.log(result);

result = arr.filter((num) => num >= 3);
console.log(result);

// 비구조화 할당 (구조분해할당)
let [first, ...rest] = arr;   // ... (spread operator)
console.log(first, rest);

let new_arr = [...arr, 6];
console.log(new_arr);
