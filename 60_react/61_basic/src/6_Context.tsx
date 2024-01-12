// Music 예제를 보면
// MusicList 컴포넌트에서는 onRemove, onToggle, onUpdate를 직접 사용하고 있지 않고
// Music 컴포넌트로 패스만 해주고 있음
// 만약 한개의 컴포넌트가 아니라 여러개의 컴포넌트를 거쳐서 전달해야 한다면?
// Context에 원하는 정보를 넣어놓고 필요한 시점에 꺼내쓰자!!
import { Dispatch, createContext, useReducer } from "react";
import { Action, MusicStateType } from "./5_Type";
import { CreateMusic, MusicList } from "./6_Music";

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
          [action.payload.name]: [action.payload.value]
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

// dispatch를 위한 타입 설정 (Action 타입을 Generic으로 설정)
type DispatchType = Dispatch<Action>;

// 1. Context를 생성해서 내보내기
// const context = createContext<InitialStateType>(initialState)
const MusicDispatchContext = createContext<DispatchType>(()=>{});  // dispatch를 위한 context
const MusicStateContext = createContext<MusicStateType>(initialState); // state를 위한 context

function MusicEx() {
  const [state, dispatch] = useReducer(musicReducer, initialState);

  // 2. MusicContext.Provider에 value값 전달하기
  return (
    <>
      <MusicStateContext.Provider value={state} >
        <MusicDispatchContext.Provider value={dispatch}>
          <CreateMusic />
          <MusicList />
        </MusicDispatchContext.Provider>
      </MusicStateContext.Provider>
    </>
  )
}


export { MusicEx, MusicDispatchContext, MusicStateContext };