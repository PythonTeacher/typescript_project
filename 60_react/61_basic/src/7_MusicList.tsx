// useReducer로 MusicList 불러오기 구현

import { useEffect, useReducer } from "react";
import { Action, MusicType } from "./5_Type";
import axios, { AxiosError } from "axios";

interface MusicAPIState {
  loading: boolean,
  data?: MusicType[],
  error?: AxiosError
}

function reducer(state: MusicAPIState, action: Action): MusicAPIState {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
      }
    case 'SUCCESS':
      return {
        loading: false,
        data: action.payload,
      }
    case 'ERROR':
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

function MusicList() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false
  });

  const fetchData = async() => {
    dispatch({ type: 'LOADING' });
    try {
      const response = await axios.get('http://localhost:3000/music');
      dispatch({ 
        type: 'SUCCESS',
        payload: response.data
      });
    } catch(e) {
      console.error(e);
      dispatch({
        type: 'ERROR',
        payload: e
      })
    }
  }

  // 마운트 시 실행하기
  useEffect(() => {
    fetchData();
  }, []);

  // data를 musicList로 이름 바꾸기
  const { loading, data: musicList, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!musicList) return null;

  return (
    <>
      <h1>Music List</h1>
      <ul>
        { musicList.map((music: MusicType) => (
          <li key={music.id}
              style={{cursor: 'pointer'}}
          >
            { music.singer } - { music.title }
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>Reloading..</button>
    </>
  )
}

export default MusicList;