import * as express from 'express';
import { Express, Request, Response } from 'express';
import * as bodyParser from 'body-parser';

// 애플리케이션(app)은 express의 인스턴스 (뼈대라고 생각하면 됨)
const app: Express = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// 라우팅 : URI 및 특정 HTTP 메소드에 어플리케이션이 응답하는 방법을 결정하는 것
//          즉, 클라이언트 요청에 대해 웹 서버가 적절한 핸들러 함수로 연결해 주는 기능
// http://localhost:3000/
app.get("/", (req, res) => {
  res.send("<h1>Hello, Node.js</h1>");
});

// http://localhost:3000/hello
app.get("/hello", (req: Request, res: Response) => {
  res.send("<h1>안녕하세요, 홍길동님</h1>");
})

// query string 방식 처리
// http://127.0.0.1:3000/music?title=좋은날&singer=아이유
// URL은 아스키코드로만 전송이 가능하므로, 그외의 문자는 %와 16진수 문자로 조합하여 인코딩하여 전송됨
// query로 꺼내면 자동으로 디코딩까지 해줌
// 채용시스템 : company.com/apply?id=10001
app.get("/music", (req: Request, res: Response) => {
  //throw new Error("GET 처리 시 오류 발생");
  const title = req.query.title;
  const singer = req.query.singer;
  //res.status(500); // 상태코드
  //res.set("Content-Type", "text/plain");
  res.send("[GET] query string -> title:" + title + ", singer:" + singer);
});

// http://127.0.0.1:3000/music/좋은날/아이유
app.get("/music/:title/:singer", (req: Request, res: Response) => {
  //console.log("req.params:", req.params);
  const title = req.params.title;
  const singer = req.params.singer;
  res.send("[GET] rest api -> title:" + title + ", singer:" + singer);
});


// 정적 파일 위치 설정
// http://127.0.0.1:3000/hello.html -> public/hello.html
app.use(express.static("public"));

// 가상 경로 설정
// http://127.0.0.1:3000/static/hello.html
// app.use('/static', express.static('public'));


// rest client 크롬 확장 프로그램 설치 - Boomerang
// 크롬 웹 스토어에서 rest client로 검색

// form으로 전달되는 바디메시지를 처리하는 바디파서 설정 (express에 포함)
// extended : 중첩된 객체 파싱여부
// 예) person[name]=kim&person[age]=3
// qs={person: {name:kim, age:3}}
// querystring={person[name]: kim, person[age]=3}
// true: qs(확장모듈, 설치필요), false: querystring(기본모듈)
app.use(bodyParser.urlencoded({ extended: false }));

// 바디 메시지가 JSON인 요청을 분석하는 바디파서 설정
app.use(bodyParser.json());

// http://127.0.0.1:3000/music
// 브라우저에서 알아서 body 메세지를 인코딩하여 보내주고, 디코딩까지 해줌
// content type : x-www-form-urlencoded
app.post("/music", (req: Request, res: Response) => {
  console.log("req.body:", req.body);
  const title = req.body.title;
  const singer = req.body.singer;
  res.send("[POST] form data -> title:" + title + ", singer:" + singer);
});

// http://127.0.0.1:3000/좋은날/아이유
app.post("/music/:title/:singer", (req: Request, res: Response) => {
  console.log("req.params:", req.params);
  const title = req.params.title;
  const singer = req.params.singer;
  res.send("[POST] rest api -> title:" + title + ", singer:" + singer);
});

// index.ts 개발 완료 후 package.json scripts 작성 > npm run start 실행