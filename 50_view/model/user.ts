import { Schema, model } from "mongoose";

// 스키마 : 컬렉션에 들어가는 문서 내부의 각 필드가 어떤 형식으로 되어 있는지 정의하는 객체
// 모델 : 스키마를 사용하여 만드는 인스턴스로 DB에서 실제작업을 처리할 수 있는 함수들을 지니고 있는 객체

// 인터페이스 생성
interface IUser {
  email: string;
  password: string;
  name: string;
  role: string;
}

// 스키마 생성
const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true, // useCreateIndex: true 추가
  },
  password: {
    // 암호화해서 들어감
    type: String,
    minlength: 8,
    required: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  role: {
    type: String,
    required: true,
    default: "0"
  }
});

// 스키마는 단순히 구조만 정의하므로 DB에 들어있는 컬렉션을 지정하려면 모델을 만들어야 함
// db에서 musics라는 컬렉션을 찾아 MusicSchema 구조로 되어 있는 모델 클래스를 만들어 리턴
// model(스키마이름, 스키마객체) -> 스키마 이름의 복수형태로 DB에 컬렉션을 만듬
// model(스키마이름, 스키마객체, 컬렉션이름) -> 이렇게 줄 수도 있음

// 모델 생성
const User = model('user', userSchema);

export default User;