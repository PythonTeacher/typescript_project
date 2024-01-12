import * as express from 'express';
import { Express, Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import router from "./api";
import * as cors from "cors";

const app: Express = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use(morgan("dev"));

// 정적 파일 위치 설정
// http://127.0.0.1:3000/hello.html -> public/hello.html
app.use(express.static("public"));

// form으로 전달되는 바디메시지를 처리하는 바디파서 설정 (express에 포함)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// 라우팅 모듈 분리
// api -> music, movie
app.use(router);

// 여기까지 내려왔다는 것은 위에서 처리가 되지 않은 것
app.use((req, res, next) => {
  res.status(404).send("없는 페이지입니다.");
});

// 오류처리 미들웨어
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
