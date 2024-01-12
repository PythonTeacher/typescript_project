import { useState } from "react";

// function Counter() {
//   return (
//     <>
//       <h1>0</h1>
//       <button>+</button>
//       <button>-</button>
//     </>
//   )
// }

// 버튼 클릭 시 이벤트 설정
// onClick={함수명}
// onClick={함수명()} 렌더링되는 시점에 함수가 호출됨
// function Counter() {
//   const onIncrease = () => {
//     console.log('+1');
//   }
//   const onDecrease = () => {
//     console.log('-1');
//   }
//   return (
//     <>
//       <h1>0</h1>
//       <button onClick={onIncrease}>+</button>
//       <button onClick={onDecrease}>-</button>
//     </>
//   )
// }

// useState Hook 사용하기 (use로 시작하는 함수를 Hook이라 함)
// useState는 리액트 Built-in Hook임
function Counter() {
  // useState는 배열을 리턴함
  // [현재 상태, Setter 함수]
  // const로 받아도 되는 이유? state값이 변하면 리렌더링되므로 그때마다 const변수가 만들어짐
  const [number, setNumber] = useState(0);
  
  const onIncrease = () => {
    // setNumber(number + 1);    // 직접 변경할 값을 넣어줌 (값 업데이트 방식)
    setNumber(prev => prev + 1);  // 기존 값을 어떻게 변경할지에 대한 함수를 등록함 (함수형 업데이트 방식)
  }
  const onDecrease = () => {
    // setNumber(number - 1);
    setNumber(prev => prev - 1);
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  )
}

type PropsType = {
  count: number,
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

// props로 state전달받기
function MyButton({ count, onClick }: PropsType) {
  return (
    <>
    <button onClick={onClick}>Clicked {count} times</button>
    </>
  )
}

// 1. name 배열을 state로 관리
// 2. Add Name Button 클릭시 이름 추가
// 3. Clear Button 클릭시 초기화
function MyName() {
  const [names, setNames] = useState<string[]>([]);

  const addName = () => {
    setNames(prev => [
      ...prev,
      'Bob'
    ])
  }
  return (
    <>
      <button onClick={addName}>Add Name</button>
      <ul>
        {names.map((name, index) => {
          return <li key={index}>{name}{index}</li>
        })}
      </ul>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}{index}</li>
        ))}
      </ul>
      <button onClick={() => setNames([])}>Clear</button>
    </>
   )
 }

type ItemType = {
  id: number,
  value: number
}

// 1. number와 items 배열을 state로 관리
// 2. Add Item Button 클릭시 item 추가
// 3. Clear Button 클릭시 초기화
function MyItem() {
  const [number, setNumber] = useState(0);
  const [items, setItems] = useState<ItemType[]>([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: number,
        value: number,
      },
    ]);
    setNumber(number + 1);
  };

  return (
    <div>
      <button onClick={addItem}>add Item</button>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      <button onClick={() => setItems([])}>Clear</button>
    </div>
  );
}

function MyInput() {
  const [text, setText] = useState('');

  // e.target : 이벤트가 발생한 DOM 요소
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    //text = e.target.value;    // 값을 직접 변경하면 안됨
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <input onChange={(e)=>setText(e.target.value)} value={text} />
      <button onClick={onReset}>Clear</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </div>
  );
}

// Assignment 3. State(2)
// 1. id와 pwd를 입력받는 input element 생성
// 2. onChange시 setter로 state값 변경
// 3. Clear 버튼 클릭 시 clear하기
function MyLogIn() {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const onReset = () => {
    setId('');
    setPwd('');
  };

  return (
    <>
      <input onChange={(e)=>setId(e.target.value)} value={id} />
      <input onChange={(e)=>setPwd(e.target.value)} value={pwd} />
      <button onClick={onReset}>Clear</button>
      <div>ID : {id}</div>
      <div>PWD : {pwd}</div>
    </>
  );
}

// input이 많아지면 useState도 여러개 onChange 함수도 여러개?
// state를 객체 형태로 해서 관리하기
// input에 name을 설정하여 이벤트가 발생했을 때 name으로 값을 설정할 수 있도록 함
function MultiInput() {
  const [student, setStudent] = useState({
    id: '',
    name: ''
  })

  const {id, name} = student;
  
  // const onChangeId:React.ChangeEventHandler<HTMLInputElement>  = (e) => {
  //   setStudent({
  //     ...student,
  //     id: e.target.value
  //   })
  // }

  // const onChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //   setStudent({
  //     ...student,
  //     name: e.target.value
  //   })
  // }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {name, value} = e.target;
    setStudent({
      ...student,
      // [e.target.name]: e.target.value
      [name]: value
    })
  }

  const onReset = () => {
    setStudent({
      id: '',
      name: ''
    })
  }

  return (
    <>
      <input name="id" placeholder="학번" onChange={onChange} value={id} />
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <button onClick={onReset}>Clear</button>
      <div>
        학번: {id}, 이름: {name}
      </div>
    </>
  )
}


export { Counter, MyButton, MyName, MyItem, MyInput, MyLogIn, MultiInput };