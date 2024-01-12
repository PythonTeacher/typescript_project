import { Request, Response } from "express";

// 데이터
let movie = [
  { id: "1", title: "스타워즈", director: "조지 루카스", year: "1977" },
  { id: "2", title: "콘택트", director: "로버트 저메키스", year: "1997" },
  { id: "3", title: "인터스텔라", director: "크리스토퍼 놀란", year: "2014" },
];

// 목록조회
// http://localhost:3000/movie?limit=5 (query string)
// - 성공 : limit 수만큼 movie 객체를 담은 배열 리턴 (200 : OK)
// - 실패 : limit가 숫자형이 아니면 400을 응답 (400: Bad Request)
const list = (req: Request, res: Response) => {
  req.query.limit = req.query.limit || "10";
  const limit = parseInt(req.query.limit as string, 10);
  
  if (Number.isNaN(limit)) {
    return res.status(400).end();
  }
  
  res.status(200).json(movie.slice(0, limit));
};

// 상세조회
// http://localhost:3000/movie/1 (rest api)
// - 성공 : id에 해당하는 movie 객체 리턴 (200 : OK)
// - 실패 : 해당하는 id가 없는 경우 404 응답 (404 : Not Found)
const detail = (req: Request, res: Response)  => {
  const id = req.params.id;

  const result = movie.find((m) => m.id === id);

  if (!result) return res.status(404).end();
  res.status(200).json(result);
};

// 등록
// http://localhost:3000/movie (form data)
// - 성공 : 201 응답, 생성된 movie 객체 반환 (201 : Created)
// - 실패 : title, director, year 값 누락 시 400 반환 (400 : Bad Request)
const create = (req: Request, res: Response)  => {
  const { title, director, year } = req.body;
  if (!title || !director || !year) return res.status(400).end();

  const id = Date.now().toString(); // 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리 초를 반환
  const m = { id, title, director, year };
  movie.push(m);
  res.status(201).json(movie);
};

// 변경
// http://localhost:30000/movie/1 (rest api)
// - 성공 : id에 해당하는 movie 객체 반환 (200 : OK)
// - 실패 : 없는 id일 경우 404 응답 (404 : Not Found)
const update = (req: Request, res: Response)  => {  
  const id = req.params.id;

  const { title, director, year } = req.body;

  const result = movie.find((m) => m.id === id);
  if (!result) return res.status(404).end();

  if (title) result.title = title;
  if (director) result.director = director;
  if (year) result.year = year;
  res.status(200).json(result);
};

// 삭제
// http://localhost:30000/movie/1 (rest api)
// - 성공 : 삭제 후 결과 배열 리턴 (200 : OK)
// - 실패 : 없는 id일 경우 404 응답 (404 : Not Found)
const remove = (req: Request, res: Response)  => {
  const id = req.params.id;

  const result = movie.find((m) => m.id === id);
  if (!result) return res.status(404).end();

  movie = movie.filter((m) => m.id !== id);
  res.status(200).json(movie);
};

export { list, detail, create, update, remove };