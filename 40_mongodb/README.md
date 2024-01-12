# 관계형 데이터베이스 (RDBMS)
* 데이터가 열과 행으로 구성된 테이블에 저장되어 있음 (스키마가 고정)
* SQL이라는 질의문에 의해 데이터를 검색, 생성, 수정, 삭제처리 함
* Oracle, MySQL, MS SQL Server, PostgreSQL 등
=> database ranking

# NoSQL 데이터베이스
* non SQL, Not Only SQL
* 원래는 Non SQL의 의미이지만, SQL 쿼리 언어를 사용할 수 있어 Not only SQL로 불리기도 함
* 비관계형 데이터베이스, 관계형 테이블과는 다른 형식으로 데이터를 저장
* 고정되지 않은 테이블 스키마를 가지므로 다양한 형태들의 데이터를 유연하게 처리할 수 있음
* 종류 : Document Database, Key-Value Database, Wide-Column Database, Graph Database
* MongoDB, Redis, Cassandra

# NoSQL 데이터베이스의 등장
* NoSQL에 주목하게 된 이유는 데이터 양이 커질수록 많이 사용되던 관계형 데이터베이스로는 성능이 떨어짐
* RDBMS의 경우 시스템의 신뢰도를 높이는데 필요한 장치를 많이 갖고 있으므로, SQL문을 읽어 처리하는데 많은 리소스를 사용하며 성능이 떨어지는 경우가 많았음
* 오늘날 사용되는 데이터의 다양성, 속도, 양을 감당하기 위해서는 관계형 데이터베이스를 보완할 다른 형태의 데이터베이스가 필요했음
* NoSQL은 실시간으로 처리해야 하는 경우나 대용량 처리를 해야 하는 시스템에 활용되기 시작함.

# MongoDB
* Document Database
* 데이터가 Document로 불리며, 이 데이터의 집합을 Collection이라고 함 (RDBMS에서는 Table)
* 스키마 제약없이 자유롭고, BSON(Binary JSON) 형태로 문서가 저장됨
* JSON에 비해 BSON은 프로토콜 헤더 정보들이 들어가 구문 해석이 더 빨리됨
* 공간은 BSON이 더 많은 공간을 차지함
* JSON은 데이터 전송을 위한 규약인 반면 BSON은 데이터 저장을 위한 규약임

# MongoDB 설치
* Products > Community Edition > Community Server
* mongodb download > 다운로드 > install
* complete > Install MongoD as a Service 체크 풀기 (윈도우 서비스로 등록할 것인지)
* Install MongoDB Compass : GUI로 MongoDB를 사용할 수 있도록 해주는 도구, 같이 설치하기
* 설치 위치 : C:\Program Files\MongoDB\Server\6.0\bin 복사
* 환경변수 추가 : 내PC > 속성 > 고급시스템설정 > 환경변수
* mongod --version

# MongoDB Server 실행
* data 디렉토리 생성 : C:\VSCode_Projects\2023-app-dev-project\40_mongodb\data
* MongoDB Server 실행 : mongod --dbpath data
* data 디렉토리에 mongoDB에서 사용하는 여러 파일과 폴더가 생성됨

# MongoDB Client 실행
* MongoDB Shell 설치 : Products > Tools > Shell > Zip 파일 풀기
* 환경변수 추가 : C:\Program Files\MongoDB\mongosh-1.8.2-win32-x64\bin
* MongoDB Client 실행 : cmd -> mongosh

# MongoDB 사용

## Database
- 데이터베이스 목록 (컬렉션을 추가해야 보임) -> show dbs
- 현재 사용중인 데이터베이스 -> db
- 사용할 데이터베이스 선택, 없는 경우 새로 생성 -> use <database이름> -> use test
- 데이터베이스 삭제 -> db.dropDatabase()

## Collection
- Collection 생성 -> db.createCollection("music")
- Collection 확인 -> show collections
- Collection 제거 -> db.music.drop()

## Document (https://www.mongodb.com/docs/manual/crud/)

1) Document 추가
- 한건 추가 -> db.music.insertOne({singer:"아이유", title:"좋은날"})
- 여러건 추가 -> db.music.insertMany([ {..}, {..}, {..} ])
-> Collection은 따로 만들지 않아도 document를 추가하면 자동으로 컬렉션이 생성됨

2) Document 조회
- 전체 조회 -> db.music.find()
- 조회 조건 추가 -> db.music.find({singer:"아이유"})
- 특정 필드만 보여주기(0: 안 보여주기, 1: 보여주기) -> db.music.find({}, {_id: 0, singer: 1, title: 1})  // projection
- 조회건수 지정 -> db.music.find().limit(1)

3) Document 수정
- 한건 수정 -> db.music.updateOne({singer:"아이유"}, {$set: {singer: "BTS"}})
- 여러건 수정 -> db.music.updateMany({singer:"아이유"}, {$set: {singer: "BTS"}})

4) Document 제거
- 한건 삭제 -> db.music.deleteOne({title:"좋은날"})
- 여러건 삭제 -> db.music.deleteMany({singer:"아이유"})
- 전체 삭제 -> db.music.deleteMany({})

## MongoDB Compass (GUI 도구)

# Mongoose 사용
- Node.js와 MongoDB를 연결해주는 외부 모듈
- npm i mongoose @types/mongoose