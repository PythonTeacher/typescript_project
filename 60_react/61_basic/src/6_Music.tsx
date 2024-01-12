import { useContext, useMemo, useRef } from "react"
import { MusicDispatchContext, MusicStateContext } from "./6_Context"
import { MusicType } from "./5_Type";

function MusicList() {
  const state = useContext(MusicStateContext);
  const musics = state.musics;  

  const countActiveMusic = (musics: MusicType[]) => {
    console.log('countActiveMusic 실행중');
    return musics.filter(music => music.active).length;
  }

  const count = useMemo(() => countActiveMusic(musics), [musics]);  // 함수, deps배열

  return (
    <>
      {musics.map(music => (
        <Music key={music.id} music={music} />
      ))}
      <div>Active Music: {count}</div>
    </>
  )
}

type MusicProps2 = {
  music: MusicType
}

function Music({ music }: MusicProps2) {
  const { id, singer, title, active } = music;

  const style = {
    cursor: 'pointer',
    color: active? 'blue': 'black'
  }

  const dispatch = useContext(MusicDispatchContext);
  
  const onRemove = (id: number) => {
    dispatch({
      type: 'REMOVE_MUSIC',
      payload: {
        id
      }
    })
  }

  const onToggle = (id: number) => {
    dispatch({
      type: 'TOGGLE_MUSIC',
      payload: {
        id
      }
    })
  }

  const onUpdate = (id: number) => {
    dispatch({
      type: 'UPDATE_MUSIC',
      payload: {
        id
      }
    })
  }

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

function CreateMusic() {
  const dispatch = useContext(MusicDispatchContext);
  const state = useContext(MusicStateContext);

  const { singer, title } = state.input;

  const nextId = useRef(4);

  const onCreate = () => {
    dispatch({
      type: 'CREATE_MUSIC',
      payload: {
        music: {
          id: nextId.current,
          singer,
          title,
          active: false
        }
      }
    })
    nextId.current += 1;
  }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {name, value} = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      payload: {
        name,
        value
      }
    })
  }

  return (
    <>
      <input name="singer" placeholder="singer" onChange={onChange} value={singer} />
      <input name="title" placeholder="title" onChange={onChange} value={title} />
      <button onClick={onCreate}>등록</button>
    </>
  )
}

export { MusicList, CreateMusic }