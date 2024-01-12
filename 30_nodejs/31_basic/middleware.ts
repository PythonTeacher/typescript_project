// 미들웨어
// Express 어플리케이션을 뼈대라고 한다면
// 이 뼈대에 들어갈 필요한 기능을 미들웨어라고 한다.
// 미들웨어 함수는 req, res, next를 인자로 가짐
// 미들웨어의 로드 순서는 중요하며, 먼저 로드되는 함수가 먼저 실행된다.
// https://expressjs.com/ko/guide/writing-middleware.html

import * as express from 'express';
import { Express, Request, Response, NextFunction } from 'express';
import * as morgan from 'morgan';

// 애플리케이션(app)은 express의 인스턴스 (뼈대라고 생각하면 됨)
const app: Express = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const mw1 = (req: Request, res: Response, next: NextFunction) => {
  console.log("첫번째 미들웨어");
  next();
}

const mw2 = (req: Request, res: Response, next: NextFunction) => {
  console.log("두번째 미들웨어");
  next();
}

app.use(mw1);
app.use(mw2);

const myLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method}, ${req.url}, ${new Date().toLocaleString()}`);
  next();
}

app.use(myLogger);

// morgan : HTTP request logger 미들웨어
// npm i morgan @types/morgan
app.use(morgan("dev"));     // tiny < dev < short < common < combined


// 미들웨어 유형

// 1. 애플리케이션 레벨 미들웨어
// 예) app.use(), app.METHOD()
// app.use() : 마운트 경로가 없는 미들웨어 함수는 HTTP 요청을 받을 때마다 실행

// /music 경로에 대한 모든 HTTP 요청에 대해 실행
app.use('/music', (req, res, next) => {
  console.log("/music의 모든 요청 처리");
  next();
})

// /music 경로에 대한 GET 요청에 대해 실행
app.get("/music", (req, res, next) => {
  console.log("/music의 GET 요청 처리");
  next();
});

// 2. 라우터 레벨 미들웨어
// Router()를 사용한다는 것을 제외하고는 애플리케이션 레벨과 동일한 방식으로 작동

// 3. 기본 제공 미들웨어
// Express의 유일한 기본 제공 미들웨어 함수는 express.static
app.use(express.static("public"));

// 4. 써드파티 미들웨어
// 별도 설치가 필요한 외부 미들웨어 함수
// morgan과 같이 모듈을 설치 한 후 로드해서 사용

// app.use((req, res, next) => {
//   throw new Error("test");
// });

// 여기까지 내려왔다는 것은 위에서 처리가 되지 않은 것
app.use((req, res, next) => {
  res.status(404).send("없는 페이지입니다.");
});

// 5. 오류처리 미들웨어
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});