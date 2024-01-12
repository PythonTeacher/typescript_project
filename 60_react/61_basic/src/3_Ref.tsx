import { useRef, useState } from "react";
import { CreateMusic, MusicList } from "./3_Music";
import { CreateMovie, MovieList } from "./3_Movie";

// useRef
// 1. 컴포넌트 안에서 조회나 수정할 수 있는 변수 관리
// - useRef로 관리하는 변수는 값이 변경되어도 리렌더링이 되지 않음 
// - 부모에게서 받은 props이 변경되거나 자신이 관리하는 state가 변경될 때마다 리렌더링이 됨
function MyButton2() {
  const [count, setCount] = useState<number>(0);
  const localCount = useRef<number>(0);   // 로컬 변수용으로 사용하는 경우 제네릭 타입과 같은 타입의 초기값 넣어주기
  let localCount2 = 0;

  const handleClick = () => {
    setCount(count + 1);
  }

  const handleClick2 = () => {
    localCount.current += 1;      // useRef 값을 수정하거나 조회할 때는 current를 사용
    console.log(localCount.current);
  }

  const handleClick3 = () => {
    localCount2 += 1;
    console.log(localCount2);
  }

  return (
    <>
      <button onClick={handleClick}>useState</button>
      <button onClick={handleClick2}>useRef</button>
      <button onClick={handleClick3}>local</button>
      <div>{count}</div>
      <div>{localCount.current}</div>
      <div>{localCount2}</div>
    </>
  )
}

// 2. 특정 DOM 선택하기 (getElementById)
function MultiInput2() {
  const [student, setStudent] = useState({
    id: '',
    name: ''
  })

  const idRef = useRef<HTMLInputElement>(null); // DOM을 조작하기 위해서 useRef를 사용할 경우 null을 초기값으로 넣기
  const nameRef = useRef<HTMLInputElement>(null);

  const {id, name} = student;  

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {name, value} = e.target;
    setStudent({
      ...student,
      [name]: value
    })
  }

  const onReset = () => {
    setStudent({
      id: '',
      name: ''
    });
    idRef.current!.focus();   // non-null assertion (컴파일러에게 절대 null, undefined가 될 수 없으니 계속 진행해)
  }

  return (
    <>
      <input name="id" placeholder="학번" onChange={onChange} value={id} ref={idRef} />
      <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameRef} />
      <button onClick={onReset}>Clear</button>
      <div>
        학번: {id}, 이름: {name}
      </div>
    </>
  )
}

// 배열 데이터 CRUD
// - 배열을 추가할 때마다 id값을 증가해서 넣고자 함
// - usestate로 관리하면 id값이 증가할 때마다 리렌더링이 되므로
//   useRef로 id를 관리하기
function MusicEx() {
  const initialState = [
    { id: 1, singer: '정국', title: 'Seven', active: false},
    { id: 2, singer: '뉴진스', title: 'Super Shy', active: false},
    { id: 3, singer: '뉴진스', title: 'ETA', active: false},
  ];

  const [musics, setMusics] = useState(initialState);

  const [inputs, setInputs] = useState({
    singer: '',
    title: ''
  });

  const { singer, title } = inputs;  
  const nextId = useRef(4);

  const onCreate = () => {
    // 배열에 추가
    const music = {
      id: nextId.current,
      singer,
      title,
      active: false
    };

    setMusics([
      ...musics,
      music
    ])

    // 등록 후 clear
    setInputs({
      singer: '',
      title: ''
    });
    nextId.current += 1;
  }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onRemove = (id: number) => {
    setMusics(musics.filter(music=>music.id !== id));
  }

  const onToggle = (id: number) => {
    setMusics(
      musics.map(music=>music.id === id ? 
        {...music, active: !music.active} : music)
    )
  }

  const onUpdate = (id: number) => {
    setMusics(
      musics.map(music=>music.id === id ?
        {...music, singer, title} : music)
    )
  }

  return (
    <>
      <CreateMusic singer={singer} title={title} onCreate={onCreate} onChange={onChange} />
      <MusicList musics={musics} onRemove={onRemove} onToggle={onToggle} onUpdate={onUpdate} />      
    </>
  )
}

// Assignment 4. Movie 등록/삭제/수정 (200점)
function MovieEx() {
  const initialState = [
    { id: 1, title: "스타워즈", director: "조지 루카스", year: "1977", active: false},
    { id: 2, title: "콘택트", director: "로버트 저메키스", year: "1997", active: false},
    { id: 3, title: "인터스텔라", director: "크리스토퍼 놀란", year: "2014", active: false},
  ];

  const [movies, setMovies] = useState(initialState);

  const [inputs, setInputs] = useState({
    title: '',
    director: '',
    year: ''
  });

  const { title, director, year } = inputs;  
  const nextId = useRef(4);

  const onCreate = () => {
    // 배열에 추가
    const movie = {
      id: nextId.current,
      title,
      director,
      year,
      active: false
    };

    setMovies([
      ...movies,
      movie
    ])

    // 등록 후 clear
    setInputs({
      title: '',
      director: '',
      year: ''
    });
    nextId.current += 1;
  }

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onRemove = (id: number) => {
    setMovies(movies.filter(movie=>movie.id !== id));
  }

  const onToggle = (id: number) => {
    setMovies(movies.map(movie=>movie.id === id ? 
      {...movie, active: !movie.active} : movie))
  }
  return (
    <>
      <CreateMovie title={title} director={director} year={year} onCreate={onCreate} onChange={onChange} />
      <MovieList movies={movies} onRemove={onRemove} onToggle={onToggle} />
    </>
  )
}

export { MyButton2, MultiInput2, MusicEx, MovieEx }