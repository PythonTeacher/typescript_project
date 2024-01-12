// useAsync로 구현하기
import { MusicType } from "./5_Type";
import axios from "axios";
import { useAsync } from "react-async";

const getMusicList = async() => {
  const response = await axios.get('http://localhost:3000/music');
  return response.data;
}

function MusicList2() {
  const { isLoading, data: musicList, error, reload } = useAsync({
    promiseFn: getMusicList
  });

  if (isLoading) return <div>로딩중..</div>;
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
      <button onClick={reload}>Reloading..</button>
    </>
  )
}

export default MusicList2;