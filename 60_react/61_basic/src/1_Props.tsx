type PropsType = {
  name?: string,
  color?: string,
  isLogIn?: boolean
}

// 부모 컴포넌트에서 넘긴 props 받기
function Hello1(props: PropsType) {
  return (
    <>
      <div style={{ color: props.color }}>안녕하세요, {props.name}님</div>
    </>
  )
}

// const Hello1: React.FC<PropsType> = (props: PropsType) => {
//   return (
//     <>
//       <div style={{ color: props.color }}>안녕하세요, {props.name}님</div>
//     </>
//   )
// }

// 비구조화 할당(구조분해 할당) 사용하기
// default props 설정하기 (optional parameter)
// isLogIn 추가하기 (조건부 렌더링 : 특정 조건에 따라 다른 결과물을 렌더링 하는 것)
function Hello2({ name='이름없음', color='black', isLogIn=false }: PropsType) {
  return (
    <>
      <div style={{ color: color }}>안녕하세요, {name}님</div>
      <div>{ isLogIn && '로그인되었습니다' }</div>
    </>
  )
}

type PropsType2 = {
  name?: string,
  color?: string,
  isLogIn?: boolean,
  children: React.ReactNode
}

// children 추가하기
function Hello3({ name='이름없음', color='black', isLogIn=false, children }: PropsType2) {
  return (
    <>
      <div style={{ color: color }}>안녕하세요, {name}님</div>
      <div>{ isLogIn && '로그인되었습니다' }</div>
      <div>{ children }</div>
    </>
  )
}


export { Hello1, Hello2, Hello3 };