import { Schema, model } from "mongoose";

// 인터페이스 생성
interface IMovie {
  title: string;
  director: string;
  year: string;
  created: Date;
}

// 스키마 생성
const movieSchema = new Schema<IMovie>({
  title: {
    type: String,   // 문자열 배열은 [String]으로 작성
    required: true
  },
  director: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now // 현재 일자
  }
});

// 스키마는 단순히 구조만 정의하므로 DB에 들어있는 컬렉션을 지정하려면 모델을 만들어야 함
// db에서 musics라는 컬렉션을 찾아 MusicSchema 구조로 되어 있는 모델 클래스를 만들어 리턴
// model(스키마이름, 스키마객체) -> 스키마 이름의 복수형태로 DB에 컬렉션을 만듬
// model(스키마이름, 스키마객체, 컬렉션이름) -> 이렇게 줄 수도 있음

// 모델 생성
const Movie = model('movie', movieSchema);

export default Movie;