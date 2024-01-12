// 두번째 예제
const func1 = (param, callback) => {
  console.log(param);
  callback(param + 1);
}

const func2 = (param, callback) => {
  console.log(param);
  callback(param + 1);
}

const func3 = (param, callback) => {
  console.log(param);
  callback(param + 1);
}

// 콜백지옥
func1(1, result => {
  func2(result, result => {
    func3(result, result => {
      console.log(result);
    });
  });
});

// Promise 적용
const f1 = (param) => {
  return new Promise((resolve, reject) => {
    console.log(param);
    resolve(param + 1);
  });
};

const f2 = (param) => {
  return new Promise((resolve, reject) => {
    console.log(param);
    resolve(param + 1);
  });
};

const f3 = (param) => {
  return new Promise((resolve, reject) => {
    console.log(param);
    resolve(param + 1);
  });
};

f1(1).then(f2).then(f3).then(result => console.log(result));

const test = async() => {
  const first = await f1(1);
  const second = await f2(first);
  const third = await f3(second);
  console.log(third);
}

test();