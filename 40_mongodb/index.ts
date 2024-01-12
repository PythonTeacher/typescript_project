import * as express from 'express';
import { Express, Request, Response, NextFunction } from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import router from "./api";

dotenv.config();
const app: Express = express();

const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// DB 연결
mongoose.connect(MONGO_URI!)    // non-null assertion 연산자 (undefined 또는 null이 아니라는 것을 강제로 알려줌)
.catch(err => console.log(err))
.then(() => console.log('Database connected!!'));   

// 미들웨어 등록
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

// 여기까지 내려왔다는 것은 위에서 처리가 되지 않은 것
app.use((req, res, next) => {
  res.status(404).send("없는 페이지입니다.");
});

// 오류처리 미들웨어
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
