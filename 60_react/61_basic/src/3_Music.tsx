import { useEffect, useMemo } from "react"

// MusicList 실습
type MusicType = {
  id: number
  singer: string,
  title: string,
  active: boolean
}

type MusicsProps = {
  musics: MusicType[],
  onRemove: (id: number) => void,
  onToggle: (id: number) => void,
  onUpdate: (id: number) => void
}

function MusicList({ musics, onRemove, onToggle, onUpdate }: MusicsProps) {
  // input 필드에 값을 입력 시마다(컴포넌트가 리렌더링 될 때마다) 실행되고 있음
  // 불필요한 실행을 하지 말자 -> 이전에 계산한 값을 재사용하자
  const countActiveMusic = (musics: MusicType[]) => {
    console.log('countActiveMusic 실행중');
    return musics.filter(music => music.active).length;
  }

  // const count = countActiveMusic(musics);
  // deps 배열이 바뀌면 등록한 함수를 호출해서 값을 연산해주고, 내용이 바뀌지 않는다면 이전에 연산한 값을 재사용함
  const count = useMemo(() => countActiveMusic(musics), [musics]);  // 함수, deps배열

  return (
    <>
      {musics.map(music => (
        <Music key={music.id} music={music} onRemove={onRemove} onToggle={onToggle} onUpdate={onUpdate} />
      ))}
      <div>Active Music: {count}</div>
    </>
  )
}

type MusicProps2 = {
  music: MusicType,
  onRemove: (id: number) => void,
  onToggle: (id: number) => void,
  onUpdate: (id: number) => void
}

function Music({ music, onRemove, onToggle, onUpdate}: MusicProps2) {
  const { id, singer, title, active } = music;
  const style = {
    cursor: 'pointer',
    color: active? 'blue': 'black'
  }

  // 1. deps가 없는 경우
  // - 컴포넌트가 리렌더링 될때마다 호출
  // useEffect(() => {
  //   console.log(music);
  // });

  // 2. deps에 빈 배열이 들어간 경우
  // - 처음 컴포넌트가 화면에 나타날 때 (Mount) -> useEffect내 함수 호출 (componentDidmount)
  // - 컴포넌트가 화면에서 사라질 때 (Unmount) -> clean-up 함수 호출 (componentWillUnmount)
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남', music);     // 외부 Lib, setTimeout, setInterval 설정
    return () => {   // clean-up 함수
      console.log('컴포넌트가 화면에서 사라짐', music); // 외부 Lib 제거, clearTimeout, clearInterval 설정
    }
  }, []);   // 함수, deps[]: 의존값이 들어있는 배열

  // 3. deps에 의존값이 존재할 경우
  // - 처음 컴포넌트가 화면에 나타날 때 (Mount) -> useEffect내 함수 호출 (componentDidmount)
  // - 컴포넌트가 화면에서 사라질 때 (Unmount) -> clean-up 함수 호출 (componentWillUnmount)
  // - 의존 값이 업데이트 됐을 때 -> componentDidUpdate
  // - useEffect에서 사용하는 state나 props가 있으면 deps에 추가하기
  //  (useEffect에서 사용하는 state나 props를 넣어주지 않응다면 useEffect가 실행될 때 최신 state와 props를 가리키지 않음)
  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남 or 컴포넌트가 업데이트된 직후', music);
  //   return () => {
  //     console.log('컴포넌트가 화면에서 사라짐 or 컴포넌트가 업데이트되기 직전', music);
  //   }
  // }, [music]);

  return (
    <>
      <div>
        <b style={style} onClick={()=>onToggle(id)}>
            {singer}
        </b>
        - {title}
        <button onClick={()=>onRemove(id)}>삭제</button>
        <button onClick={()=>onUpdate(id)}>변경</button>
      </div>
    </>
  )
}

type CreateMusicProps = {
  singer: string,
  title: string,
  onCreate: () => void,
  onChange: React.ChangeEventHandler<HTMLInputElement>
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function CreateMusic({ singer, title, onCreate, onChange }: CreateMusicProps) {
  return (
    <>
      <input name="singer" placeholder="singer" onChange={onChange} value={singer} />
      <input name="title" placeholder="title" onChange={onChange} value={title} />
      <button onClick={onCreate}>등록</button>
    </>
  )
}

export { MusicList, CreateMusic }