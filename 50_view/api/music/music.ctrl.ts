import { Request, Response } from "express";
import Music from "../../model/music";

// 목록조회
// http://localhost:3000/music?limit=5 (query string)
// - 성공 : limit 수만큼 music 객체를 담은 배열 리턴 (200 : OK)
// - 실패 : limit가 숫자가 아니면 400을 응답 (400: Bad Request)
const list = async (req: Request, res: Response) => {
  req.query.limit = req.query.limit || "10";
  const limit = parseInt(req.query.limit as string, 10);
  
  if (Number.isNaN(limit)) {
    return res.status(400).json({ message: "limit가 숫자가 아닙니다." });
  }

  try {
    const result = await Music.find()
    .sort({ _id: -1 })    // 1: ascending order, -1: descending order
    .limit(limit);
    res.status(200).render("music/list", { result });
  } catch(e) {
    console.error(e);
    res.status(500).json({ message: "목록조회 시 오류가 발생했습니다." });
  }
};

// 상세조회
// http://localhost:3000/music/1 (rest api)
// - 성공 : id에 해당하는 music 객체 리턴 (200 : OK)
// - 실패 : 해당하는 id가 없는 경우 404 응답 (404 : Not Found)
const detail = async (req: Request, res: Response)  => {
  const id = req.params.id;

  try {
    const result = await Music.findById(id);
    if (!result) return res.status(404).json({ message: "데이터가 존재하지 않습니다." });

    if(req.url.endsWith("edit")) {
      res.status(200).render("music/update", { result });
    } else {
      res.status(200).render("music/detail", { result });
    }
  } catch(e) {
    console.error(e);
    res.status(500).json({ message: "상세조회 시 오류가 발생했습니다." });
  }
};

// 등록
// http://localhost:3000/music (form data)
// - 성공 : 201 응답, 생성된 music 객체 반환 (201 : Created)
// - 실패 : title, singer 값 누락 시 400 반환 (400 : Bad Request)
const create = async (req: Request, res: Response)  => {
  const { title, singer } = req.body;
  if (!title || !singer) return res.status(400).json({ message: "필수값이 입력되지 않았습니다." });

  try {
    const music = new Music({ title, singer });
    const result = await music.save();    // Document를 생성
    list(req, res);   // 목록조회 호출
  } catch(e) {
    console.error(e);
    res.status(500).json({ message: "등록 시 오류가 발생했습니다." });
  }
};

// 수정
// http://localhost:30000/music/1 (rest api)
// - 성공 : id에 해당하는 music 객체 반환 (200 : OK)
// - 실패 : 없는 id일 경우 404 응답 (404 : Not Found)
const update = async (req: Request, res: Response)  => {
  const id = req.params.id;
  const { title, singer } = req.body;
  try {
    const result = await Music.findByIdAndUpdate(
      id, 
      { title, singer },
      { new: true }
    );
    if (!result) return res.status(404).json({ message: "데이터가 존재하지 않습니다." });
    res.status(200).json({ result });
  } catch(e) {
    console.error(e);
    res.status(500).json({ message: "수정 시 오류가 발생했습니다." });
  }
};

// 삭제
// http://localhost:30000/music/1 (rest api)
// - 성공 : 삭제 후 결과 배열 리턴 (200 : OK)
// - 실패 : 없는 id일 경우 404 응답 (404 : Not Found)
const remove = async(req: Request, res: Response)  => {
  const id = req.params.id;

  try {
    const result = await Music.findByIdAndDelete(id);   // findByIdAndRemove도 가능
    if (!result) return res.status(404).json({ message: "데이터가 존재하지 않습니다." });
    res.status(200).json({ result });
  } catch(e) {
    console.error(e);
    res.status(500).json({ message: "삭제 시 오류가 발생했습니다." });
  }
};

export { list, detail, create, update, remove };