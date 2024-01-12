// Assignment 1. Props

// 1. Title 컴포넌트 작성
function Title() {
  return (
    <>
      <h1>슬램덩크 선수들</h1>
      <hr />
    </>
  )
}

// 2. 타입 선언
// - name: string (이름)
// - playerNo: number (등번호, optional parameter)
// - playYN: boolean (출전여부)
// - children
type PlayerType = {
  name: string,  
  playerNo?: number,
  playYN: boolean, 
  children: React.ReactNode
}

// 3. Player 컴포넌트 작성
// 1) 비구조화 할당으로 작성하기
// 2) playNo: 없는 경우 100번 출력하기
// 3) playYN: 조건부 렌더링 (true: 경기 출전함, false: 경기 출전 안함)
// 4) children: 별명 추가하기
function Player({ name, playerNo=100, playYN, children }: PlayerType) {
  return (
    <>
      <div>이름: {name}</div>
      <div>번호: {playerNo}번</div>
      <div>{ playYN && '경기 출전함' }{ !playYN && '경기 출전 안함' }</div>
      <div>별명: { children }</div>
      <br />
    </>
  )
}


export { Title, Player }