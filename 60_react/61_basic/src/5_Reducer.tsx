import { useReducer, useRef, useState } from "react";
import { Action, MusicStateType } from "./5_Type";
import { CreateMusic, MusicList } from "./3_Music";

// useState의 Counter를 useReducer로 구현
function counterReducer(state: number, action: Action) {
  console.log(state, action);
  switch(action.type) {
    case 'ADD':
      return state + action.payload;
    case 'SUB':
      return state - action.payload;
    default:
      return state;
  }
}

function Counter() {
  // const [number, setNumber] = useState(0);
  const [number, dispatch] = useReducer(counterReducer, 0);
  
  const onIncrease = () => {
    // setNumber(prev => prev + 1);
    dispatch({type: 'ADD', payload: 2});
  }

  const onDecrease = () => {
    // setNumber(prev => prev - 1);
    dispatch({type: 'SUB', payload: 2});
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </>
  )
}

// Music 배열 CRUD를 useReducer로 구현
const initialState: MusicStateType = {
  input: {
    singer: '',
    title: ''
  },
  musics: [
    { id: 1, singer: '정국', title: 'Seven', active: false},
    { id: 2, singer: '뉴진스', title: 'Super Shy', active: false},
    { id: 3, singer: '뉴진스', title: 'ETA', active: false},
  ]
}

function musicReducer(state: MusicStateType, action: Action): MusicStateType {
  switch (action.type) {
    case 'CHANGE_INPUT':        // 값 입력
      return {
        ...state,
        input: {
          ...state.input,
          [action.payload.name]: action.payload.value
        }
      }
    case 'CREATE_MUSIC':      // 등록
      return {
        musics: state.musics.concat(action.payload.music),
        input: initialState.input
      }
    case 'REMOVE_MUSIC':
      return {
        ...state,
        musics: state.musics.filter(music=>music.id !== action.payload.id)
      }
    case 'TOGGLE_MUSIC':
      return {
        ...state,
        musics: state.musics.map(music=>
          music.id === action.payload.id ? { ...music, active: !music.active } : music)
      }
    case 'UPDATE_MUSIC':
      return {
        ...state,
        musics: state.musics.map(music =>
          music.id === action.payload.id ? { ...music, ...state.input } : music)
      }
    default:
      return state;
  }
}

function MusicEx() {
  const [state, dispatch] = useReducer(musicReducer, initialState);
  const { singer, title } = state.input;  
  const { musics } = state;

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
      <CreateMusic singer={singer} title={title} onCreate={onCreate} onChange={onChange} />
      <MusicList musics={musics} onRemove={onRemove} onToggle={onToggle} onUpdate={onUpdate} />      
    </>
  )
}

export { Counter, MusicEx };