# Node.js 실습환경 셋팅

## package.json 생성
- npm init -y

## Express 설치
- express 홈페이지 살펴보기
- npm i express

## 타입 정의 파일 설치
- 타입 정의 파일(.d.ts) : 모듈의 타입을 알려주기 위한 파일
- @types/node : node에서 사용되는 TypeScript 타입 정의 파일
- @types/express : express에서 사용되는 TypeScript 타입 정의 파일
- npm i @types/node @types/express

## tsconfig.json 파일 작성

## index.ts 파일 생성
- (개발시) ts-node index.ts 실행
- (배포시) tsc > node index.js

## nodemon 설치
- npm i -D nodemon
- nodemon index.js
- tsc로 컴파일하여 index.js를 만들면 서버 자동 restarting됨
- 이것도 불편하면 nodemon.json 파일 생성 > nodemon으로 실행
---

# HTTP 메서드
- GET : 자원을 조회- 
      데이터를 URL 끝에 ? 뒤의 쿼리스트링을 통해 데이터 전송
      URL데이터는 헤더에 들어가므로 헤더로 전송, 길이 제한 있음
- POST : 자원을 생성
       데이터를 HTTP 메세지의 Body에 담아 전송, 길이 제한 없음
- PUT : 자원을 갱신
- DELETE : 자원을 삭제
GET은 단순 조회 또는 Link 시 사용, POST는 서버 값이나 상태를 바꾸기 위해 사용
이는 익스프레스 어플리케이션의 메소드로 구현되어 있다
---

# HTTP 상태코드
- https://developer.mozilla.org/ko/docs/Web/HTTP/Status
- 200: 성공(success), GET, PUT
- 400: 잘못된 요청 (Bad Request)
- 404: 찾을 수 없음 (Not found)
- 500: 서버 에러 (Internal server error)

---

# REST API
- Representational State Transfer의 약자
- REST API 구성 : 자원(URI) + 행위(HTTP Method)
- URI는 정보의 자원을 명사로 표현한다.
- 자원에 대한 행위는 HTTP 메소드로 표현한다.

## REST API Example
- 목록조회 : GET /users
- 상세조회 : GET /users/1
- 등록 : POST /users
- 수정 : PUT /users/1
- 삭제 : DELETE /users/1

RESTAPI test : https://jsonplaceholder.typicode.com/

(예전 방식)
test.com/users/search
test.com/users/create
test.com/users/update
test.com/users/delete

end point는 동일하게 가고, action은 메소드로 구분
test.com/users [GET]
test.com/users [POST]
test.com/users [PUT]
test.com/users [DELETE]


## module-resolution
https://evan-moon.github.io/2021/08/22/tsconfig-compiler-options-modules/
