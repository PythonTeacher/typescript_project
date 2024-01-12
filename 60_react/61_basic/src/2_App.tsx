import { useState } from "react";
import { Counter, MultiInput, MyButton, MyInput, MyItem, MyLogIn, MyName } from "./2_State";

// state값을 props로 내리기
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Counter />
      <hr/>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={()=>setCount(count + 1)} />
      <button onClick={()=>setCount(0)}>Clear</button>
      <hr/>
      <MyName />
      <hr/>
      <MyItem />
      <hr />
      <MyInput />
      <hr />
      <MyLogIn />
      <hr />
      <MultiInput />
    </>
  )
}

// Assignment 2. State(1) - color
// function App() {
//   const [color, setColor] = useState('black');
//   return (
//     <>
//       <h1 style={{ color }}>색상 바꾸기</h1>
//       <button onClick={() => setColor('red')}>red</button>
//       <button onClick={() => setColor('green')}>green</button>
//       <button onClick={() => setColor('blue')}>blue</button>
//     </>
//   )
// }



export default App;