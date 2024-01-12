< 학습 내용 >

1. 리액트에서 다루는 데이터는 props와 state로 나뉨
- props : 부모 컴포넌트가 자식 컴포넌트에게 주는 값
          자식 컴포넌트는 props를 받아오기만 할 수 있고, 받아온 props를 직접 수정 불가
- state : 컴포넌트 내부에서 선언하며 내부에서 값 변경 가능
          컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달할 수 있음

2. 조건부 렌더링
- 특정 조건이 참인지 거짓인지에 따라 다른 결과물을 렌더링하는 것을 의미함
- JSX 내부에서는 if문을 사용할 수 없음 -> 밖에서 if문을 사용해서 사전에 값을 설정하거나 삼항연산자를 쓰면 됨
- 삼항연산자 -> 참인때는 XX, 거짓일 때는 YY 보여줄 때 사용
- 참일 때만 내용을 보여주고, 거짓일 때는 보여주지 않아야 할 경우 && 이용 (true && expression -> expression)
- 디폴트 값대신 || 를 쓰는 것도 가능 {name} -> {name || "이름없음"}
- isSpecial={true} 인 경우 props 값 설정을 생략하면 true로 설정한 것과 동일
- JSX에서는 null, false, undefiend를 렌더링하면 아무것도 나타나지 않음

예제) message props에 데이터가 있으면 "You have messages" 출력

3. state
- state : 컴포넌트 내부에서 선언하며 내부에서 값 변경 가능, 즉 자기 자신이 지니고 있는 데이터임
- 리액트 16.8 이전 버전에서는 함수형 컴포넌트에서 상태 관리를 할 수 없었으나
  16.8부터 Hook이라는 기능이 도입되면서 함수형 컴포넌트에서도 상태 관리를 할 수 있게 됨
- Hook 소개 : reactjs.org 사이트 -> Get Started -> Hook 소개
- 이전까지는 상태를 관리하기 위해 클래스 컴포넌트의 여러개의 생명주기 메소드에서 데이터 관련 로직을 구현했음
  컴포넌트 크기가 커지고, 테스트하기도 어려워졌고, 컴포넌트 재사용을 어렵게 만들었음
- Hook 개요 살펴보기
- useState() Hook 사용

4. Input 필드 상태 관리하기
- reactjs.org 사이트 -> 7. Hook API 참고서

* 컴포넌트가 업데이트 되는 경우
1) 부모 컴포넌트에서 넘겨주는 props가 바뀔 때
2) 컴포넌트 자신이 갖고 있는 state가 setState를 통해 업데이트 될 때
3) 부모 컴포넌트가 리렌더링될 때 (props가 바뀌지 않아도 state가 바뀌지 않아도 부모 컴포넌트가 리렌더링되면 자식 컴포넌트 또한 리렌더링됨)

5. DOM에 직접 접근하기
- 특정 엘리먼트에 접근해서 크기를 얻어온다거나 포커스를 설정하는 등 DOM 객체에 직접 접근해야 하는 경우
- useRef() Hook 사용
1) DOM에 접근시
2) 컴포넌트안에 렌더링이 필요없는 변수 만들기 (리렌더링되어도 값을 유지하고자 할때)
- useState() : state값이 변경되면 리렌더링이 되고 업데이트된 상태를 조회할 수 있음
- useRef() : 리렌더링 없이 설정후 바로 조회, 변경이 되어도 리렌더링되지 않음, 로컬 변수(렌더링과 상관없이 변경할 수 있는 값)

6. 배열 렌더링
- MusicList -> Music (배열 내장함수 map 사용)
- 배열을 렌더링 할 때에는 key 추가

7. 배열에 데이터 추가, 삭제, 수정하기

8. useEffect : 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 하는 Hook
- 컴포넌트가 처음 화면에서 나타나게 될 때(마운트), 화면에서 사라질 때(언마운트) 특정 작업을 수행할 경우
- 컴포넌트가 업데이트 되었을 때 특정 작업을 수행할 경우
- 클래스 컴포넌트의 라이프사이클 메소드를 대체함 (componentDidMount, componentWillUnmount, componentDidUpdate)
- 형식) useEffect(fn, []) (함수, 의존값이 들어있는 deps 배열)
- useEffect에서 사용하는 state나 props가 있다면 deps에 추가하기 (useEffect 함수 실행 시 props의 최신상태를 가리킬 수 있음)

9. useMemo : 연산한 값 재사용 (memoizedValue 값을 리턴)
- 특정 값이 바뀐 경우에만 연산 실행
- 값이 변경되지 않은 경우 이전에 연산된 값을 재사용 (메모이제이션)
- 컴포넌트 성능 최적화를 위해 사용

10. useReducer : 상태 업데이트 로직을 컴포넌트에서 분리 가능
useState : setter를 이용하여 값을 직접 업데이트, 간단한 데이터 처리
useReducer : action객체를 기반으로 업데이트, 복잡한 데이터 처리

- reducer : 현재 상태와 action 객체를 파라미터로 받아 새로운 상태를 반환해주는 함수
function reducer(state, action) { // 현재 상태, action 객체
  switch (action.type) {
    case 'INC':
      return state + 1; // 업데이트 상태 반환
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
}

// state : 컴포넌트에서 사용하는 상태값
// dispatch : 액션을 발생시키는 함수
const [state, dispatch] = useReducer(reducer, 0);
dispatch({type: 'INC'})

11. Context : 프로젝트 안에서 전역적으로 사용할 수 있는 값을 관리 (함수 전달도 가능)
1) createContext()로 Context를 생성하기 (다른 컴포넌트에서 불러쓰려면 export 하기)
2) Context.Provider 컴포넌트에 value값으로 전달하기
3) useContext() hook을 사용하여 Context의 값 읽어오기

12. TodoList 만들기
1) yarn create react-app 72_todo (npx create-react-app 72_todo)
2) yarn add styled-components react-icons

13. API 연동하기
- npx create-react-app 72_api
- yarn add axios (REST API 요청 시 Promise 기반으로 처리하게 해주는 라이브러리)
- yarn global add json-server
- music.json 파일 생성
- json-server --watch music.json --port 5000
- MusicList, Music : useReducer로 구현

14. react-async로 요청하기
- yarn add react-async
- MusicList2, Music2 : react-async로 구현
- api.js로 분리하기

15. 리액트 라우터
- SPA : 라우팅을 클라이언트가 담당, 어떤 주소에 어떤 UI를 보여줄 지 규칙을 정하는 작업
        예전에는 보통 서버에서 라우팅을 처리했음
- React Router : 컴포넌트를 기반으로 라우팅을 함
- yarn add react-router-dom