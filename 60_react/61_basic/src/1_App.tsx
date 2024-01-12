import { Component } from 'react';
import './App.css';
import Hello from './Hello';
import { Hello1, Hello2, Hello3 } from './1_Props';
import { Title, Player } from './1_Props_ex_answer';

// 1. 컴포넌트 작성하기
// 1) 함수형 컴포넌트
// function App() {
//   return <h1>Hello React!!</h1>
// }

// const App2: React.FC = () => {
//    return <h1>Hello, world!!</h1>
// }

// 2) 클래스형 컴포넌트
// class App3 extends Component {
//   name = "홍길동";
//   render() {
//     return <h1>Hello, World!! {this.name}</h1>
//   }
// }

// 2. JSX 규칙
// 1) 여는 태그와 닫는 태그가 꼭 있어야 함 (XML 형식)
// 2) 하나의 Element에 감싸져 있어야 함
// 3) JSX 내부에서 javascript 표현식을 사용할 때에는 {} 사용
// 4) class 대신 className 사용
// 5) camelCase 사용 : onclick -> onClick, font-size -> fontSize

// function App() {
//   const name = "홍길동";
//   const style = {
//     backgroundColor: 'black',
//     color: 'white',
//     fontSize: 20
//   }
//   /* 주석처리 */
//   return (
//     <>
//       {/* 주석처리 */}
//       /* 이건 주석이 아님 */
//       <div className="App">안녕하세요, {name}님</div>
//       <div style={style}>안녕하세요, {name}님</div>
//       <div style={{fontSize: 30}}>안녕하세요, {name}님</div>
//     </>
//   );
// }


// 3. Hello 컴포넌트 작성하기
// 1) 기본
// 2) props에 name과 color 추가하기
// 3) default props 설정하기 (optional parameter)
// 4) isLogIn 추가하기
// function App() {
//   return (
//     <>
//       <Hello />
//       <Hello />
//       <br/>
//       <Hello1 name="홍길동" color="blue" />
//       <Hello1 name="아이유" color="green" />
//       <br/>
//       <Hello2 name="홍길동" color="blue" isLogIn={true} />
//       <Hello2 name="아이유" color="green" isLogIn={false} />
//       <Hello2 isLogIn />
//     </>
//   );
// }

// 4. children 추가하기
function App() {
  return (
    <>
      <Hello3 name="홍길동" color="blue" isLogIn={true}>내용1</Hello3>
      <Hello3 name="아이유" color="green" isLogIn={false}>내용2</Hello3>
      <Hello3 isLogIn={true}>내용3</Hello3>
    </>
  );
}


// Assignment 1. props
// function App() {
//   return (
//     <>
//       <Title />
//       <Player name="강백호" playerNo={10} playYN={true} >농구천재</Player>
//       <Player name="서태웅" playerNo={11} playYN={true} >슈퍼루키</Player>
//       <Player name="정대만" playerNo={14} playYN={false} >불꽃남자</Player>
//       <Player name="송태섭" playYN={false} >돌격대장</Player>
//     </>
//   )
// }

export default App;
