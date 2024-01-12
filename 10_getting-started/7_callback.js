// 7. 콜백 함수

// 다른 함수의 인자로서 넘겨지는 함수로, 넘겨받은 코드에서
// 콜백함수를 필요에 따라 즉시 실행하거나 나중에 실행할 수 있음 (어떤 이벤트에 의해 호출되어지는 함수)

// 동기식 처리
function add_sync(a, b) {
  var sum = a + b;
  return sum;
}

function print(result) {
  console.log(result);
}

print(add_sync(1, 2));

// 비동기식 처리
function add_async(a, b, callback) {
  var sum = a + b;
  callback(sum);
}

add_async(1, 2, print);

// 익명함수로 전달
add_async(1, 2, function (result) {
  console.log(result);
});

// 화살표 함수로 전달
add_async(1, 2, (result) => {
  console.log(result);
});

// 더 짧게
add_async(1, 2, result => console.log(result));

// 아래 결과 예상 (from 0 to <1)
function randomTime() {
  return Math.floor(Math.random() * 100);
}

function cb() {
  setTimeout(() => console.log("하나"), randomTime());
  setTimeout(() => console.log("둘"), randomTime());
  setTimeout(() => console.log("셋"), randomTime());
}
cb();

// 하나둘셋이 나오게 하려면? 비동기 함수의 순서를 제어하려면? 콜백함수 사용
function cb2() {
  setTimeout(() => {
    console.log("하나2");
    setTimeout(() => {
      console.log("둘2");
      setTimeout(() => {
        console.log("셋2");
      }, randomTime());
    }, randomTime());
  }, randomTime());
}
cb2();

// ES5로 비동기 콜백함수를 구현하려면 코드가 복잡해짐 (콜백 지옥)

// Promise : 콜백 지옥을 없애기 위해 ES6에 도입된 클래스
// Promise 객체는 resolve와 reject 매개변수를 가진 콜백 함수를 제공
// resolve는 성공, reject는 실패
const doTask = (taskname) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(taskname);
      resolve();
    }, randomTime());
  });
}

const promise_func = () => {  
  doTask("하나3")
  .then(() => {
    return doTask("둘3");   // Promise 객체 return해주기
  })
  .then(() => {
    setTimeout(() => console.log("셋3"), randomTime());
  })
  .catch((err) => {
    console.log(err);
  });
}
promise_func();

// async/await는 Promise를 더욱 쉽게 사용할 수 있도록 추가된 ES2017(ES8) 문법임
// 함수 앞에 async 키워드 추가, Promise 앞에 await 키워드 추가
// await 함수가 해당값이 반환되기 전까지 async 내부 함수는 일시 중단됨
const promise_func2 = async() => {
  try {
    await doTask("하나4");
    await doTask("둘4");
    setTimeout(() => console.log("셋4"), randomTime());
  } catch(e) {
    console.log(e);
  }
}
promise_func2();
