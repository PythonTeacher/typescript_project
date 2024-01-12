## React
- 페이스북에서 만든 JavaScript 프론트엔트 라이브러리
- 위키백과
- 리액트를 구성하는 기본요소 : 가상 DOM, JSX, 컴포넌트

## 가상 Dom (Virtual Document Object Model)
- 브라우저는 화면을 그리기 위해 트리 형태의 DOM을 사용하는데
- 이 DOM에 모든 정보가 들어있어 화면을 추가, 변경 시 DOM을 조작하는 작업은 무거워짐
- React는 실제 DOM의 변경사항을 빠르게 반영하기 위해 내부적으로 가상 DOM을 만들어 관리함
- React and the Virtual DOM (https://www.youtube.com/watch?v=BYbgopx44vo)
- 데이터가 바뀌었을 때 더 이상 어떻게 업데이트 할 지를 고려하는게 아니라, 
  그냥 일단 바뀐 데이터로 일단 그려놓고 비교를 한다음에, 바뀐 부분만 찾아서 바꿔줌
-> 따라서, DOM의 변화를 최소화시켜 성능을 높여줌

## JSX (Javascript XML)
- Javascript에 XML을 추가하여 확장한 문법
- 마치 HTML 문법처럼 사용하면 되므로 가독성이 높고 작성하기 쉬움
- JSX는 공식적인 Javascript 문법은 아님
- 브라우저에서 실행하기 전에 바벨을 사용하여 자바스크립트 형태로 변환함

## 컴포넌트
- 리액트 앱을 구성하는 재사용 가능한 단위
- '컴포넌트'라고 불리는 작은 코드 조각을 이용하여 복잡한 UI를 구성
- 함수형 컴포넌트, 클래스형 컴포넌트
- 컴포넌트 구성요소 : props, state, context

## React Developer Tools 설치
- chrome 웹 스토어 : 확장 프로그램

# React Project 생성
- create-react-app(CRA) : React 개발환경을 구축해주는 프로그램
- npx : npm으로 설치하면 버전 관리가 어려워짐, npx로 항상 최신버전으로 설치하도록 함
- npx create-react-app 프로젝트명 --template typescript

## 실행 명령
- npm start : 개발모드
- npm run build : 빌드(배포)모드 

## 웹팩
- 웹팩 : 프런트엔드 프레임워크에서 사용하는 대표적인 모듈 번들러 (https://webpack.kr)
- 모듈 : 웹 애플리케이션이 동작하는데 필요한 자원 (html, js, css, image 등)
- 모듈 번들링 : 이러한 모듈들을 결합하여 하나의 파일로 병합, 압축해 주는 것

## 빌드모드로 실행하기
- npm run build : 웹팩이 build 디렉토리 밑에 번들 파일을 만들어줌 (index.html 파일 비교)
- npm install -g serve : 웹서버 설치
- serve -s build : 웹서버 기동
- build 디렉토리를 nginx나 아파치서버와 같은 자신의 웹서버로 올리면 됨

## 개발모드로 실행하기
- npm start
- 웹팩이 서버 형태로 구동됨 (build 디렉토리 생성되지 않음)
- 웹팩 서버가 파일들을 빌드하여 번들 파일로 만들고, 이를 반영한 index.html 파일을 생성 (script 추가)
- 웹 브라우저에서 index.html의 자바스크립트를 실행해 화면에 보여줌

## 소스 수정해보기
- src\App.tsx : Hello, World!로 수정
- 핫 모듈 교체 (hot module replacement, HMR) : 웹팩에서 제공하는 유용한 기능 중 하나
- 웹팩서버는 프로젝트 디렉토리에 새로운 파일이 생기거나 기존 파일이 변경, 삭제되는지를 감시
- 처음 빌드한 번들과 다른 부분이 생기면 해당 부분만 빌드하여 실시간으로 반영해줌
- HMR 기능은 100% 완벽하지 않아서 원하는 결과가 나오지 않으면 웹페이지 새로 고침하면 핫모듈교체를 강제로 수행함

## 리액트에서 다루는 데이터는 props와 state로 나뉨
- props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값
          자식 컴포넌트는 props를 받아오기만 할 수 있고, 받아온 props를 직접 수정 불가
- state : 컴포넌트 내부에서 선언하며 내부에서 값 변경 가능
          컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달할 수 있음

## useState
- state : 컴포넌트 내부에서 선언하며 내부에서 값 변경 가능, 즉 자기 자신이 지니고 있는 데이터임
- 리액트 16.8 이전 버전에서는 함수형 컴포넌트에서 상태 관리를 할 수 없었으나
  16.8부터 Hook이라는 기능이 도입되면서 함수형 컴포넌트에서도 상태 관리를 할 수 있게 됨
- 이전까지는 상태를 관리하기 위해 클래스 컴포넌트의 여러개의 생명주기 메소드에서 데이터 관련 로직을 구현했음
  컴포넌트 크기가 커지고, 테스트하기도 어려워졌고, 컴포넌트 재사용을 어렵게 만들었음

## useRef
- 컴포넌트 안에서 조회나 수정할 수 있는 변수 관리
- useRef로 관리하는 변수는 값이 변경되어도 리렌더링이 되지 않음 
- 부모에게서 받은 props이 변경되거나 자신이 관리하는 state가 변경될 때마다 리렌더링이 됨
- 특정 DOM 선택하기 (getElementById)

## useEffect
- 클래스 컴포넌트의 라이프사이클 메소드를 대체하는 Hook
- 컴포넌트가 처음 화면에 나타날 때(마운트, componentDidMount) 특정 작업을 수행
- 컴포넌트가 화면에서 사라질 때(언마운트, componentWillUnmount) 특정 작업을 수행
- 업데이트가 일어날 때(업데이트, componentDidUpdate) 특정 작업을 수행
- 형식) useEffect(fn, []) (함수, 의존값이 들어있는 deps 배열)
- useEffect에서 사용하는 state나 props가 있다면 deps에 추가하기 (useEffect 함수 실행 시 props의 최신상태를 가리킬 수 있음)

## useMemo
- 컴포넌트 성능 최적화를 위해 연산한 값을 재사용하는 Hook (memoization)
- 불필요한 계산을 줄이자
- 값이 변경되지 않은 경우 이전에 연산된 값을 재사용 (메모이제이션)
- 특정 값이 바뀐 경우에만 연산 실행

## useReducer
- 상태 업데이트 로직을 컴포넌트에서 분리
- useState: setter를 이용하여 값을 직접 업데이트, 간단한 데이터 처리 시 사용
- useReducer : action 객체를 기반으로 업데이트, 복잡한 데이터 처리 시 사용

- reducer 함수: 현재 상태와 action 객체를 파라미터로 받아 새로운 상태(next state)를 반환해주는 함수
- action : 업데이트를 위한 정보를 담고 있는 객체 (형식은 자유)
function reducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return state + 1; // 업데이트 상태 반환
    case 'SUB':
      return state - 1;
    default:
      return state;
  }
}

- state: 컴포넌트에서 사용하는 상태
- dispatch: 액션을 발생시키는 함수
const [state, dispatch] = useReducer(reducer, 0); // reducer함수, 초기상태
dispatch({type: 'ADD'});

## useContext
- 프로젝트 안에서 전역적으로 사용할 수 있는 값을 관리 (함수 전달도 가능)
- MusicList 컴포넌트에서는 onRemove, onToggle, onUpdate를 직접 사용하고 있지 않고
  Music 컴포넌트로 패스만 해주고 있음
- 만약 한개의 컴포넌트가 아니라 여러개의 컴포넌트를 거쳐서 전달해야 한다면?
- Context에 원하는 정보를 넣어놓고 필요한 시점에 꺼내쓰자!!
- createContext()로 Context 생성해서 내보내기
- Context.Provider에 value값 전달하기
- useContext() hook을 사용하여 Context 값 읽어오기

## API 연동하기
- axios 라이브러리 : REST API 요청 시 Promise 기반으로 처리하게 해주는 라이브러리
- npm i axios (types@axios는 안해도 됨, 포함되어 있음)

< api server 생성 >
- npm i -g json-server
- music.json 파일 생성
- json-server --watch music.json --port 3001

< api server 실행 >
1) 30_nodejs/32_example : nodemon으로 실행
- localhost:3000/music

2) 60_react/61_basic : npm start로 실행
- port 중복 -> yes하면 3001포트로 실행

3) CORS 에러 발생
- Cross Origin Resource Sharing의 약자
- 현재 도메인과 다른 도메인으로 리소스를 요청하는 경우를 뜻함 (포트번호가 다른 경우도 포함)
- 브라우저는 보안 정책 상 기본적으로 CORS를 허용해주고 있지 않음

4) cors 미들웨어 설치
- npm i cors @types/cors

5) 30_nodejs/32_example/index.ts 소스 수정

import * as cors from "cors";
app.use(cors());

## useAsync
- API로 데이터를 요청할 때마다 reducer 함수를 작성하는 것은 번거로운 일
- react-async 설치하기
- npm i react-async
- useReducer 대신 useAsync 쓰기

## React Router
- 라우팅: 어떤 주소에 어떤 UI를 보여줄 지 규칙을 정하는 작업
- 예전에는 서버에서 라우팅을 처리했으나 클라이언트에서 라우팅을 처리할 수 있음 
- React Router를 사용하면 컴포넌트 기반으로 라우팅을 함
- npm i react-router-dom