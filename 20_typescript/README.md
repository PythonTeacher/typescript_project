# TypeScript

* 자바스크립트에 타입을 부여한 언어
* 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어
  (모든 자바스크립트 코드는 타입스크립트로 동작)
* MS에서 개발, 유지보수하고 있음
* 클라이언트 사이드와 서버 사이드 모두 개발 가능
* 타입스크립트 개발 -> 컴파일 -> 자바스크립트 변환, 실행
* https://www.typescriptlang.org/ -> strongly typed programming language
* 장점
  * 타입 안정성(Type Safety) 제공
  * 강력한 타입으로 대규모 어플리케이션 개발에 용이 (에러의 사전 방지) -> 코드의 품질 향상
  * 개발 도구에서의 강력한 지원 (코드 가이드 및 자동완성) -> 개발생산성 향상
* https://github.com/microsoft

# TypeScript 설치
* Node.js 설치 : Typescript -> Javascript로 변환해주는 TSC가 Node.js 어플리케이션
* npm i -g typescript (mac은 sudo npm i -g typescript)
* tsc -v
* tsc 실행 시 보안 오류 발생 -> 터미널(관리자 권한)에서 아래 명령어 실행 (Restricted -> RemoteSigned)
```
$ Get-ExecutionPolicy
$ Set-ExecutionPolicy RemoteSigned
```
* 권한 상태값
  * Restricted : default설정값으로, 스크립트 파일을 실행할 수 없습니다.
  * RemoteSigned : 로컬에서 본인이 생성한 스크립트와, 신뢰할 수 있는(서명된) 스크립트 파일 실행할 수 있습니다.

* hello.js 작성
* hello.js 복사 -> hello.ts로 붙여넣고 ts로 구현
* tsc hello.ts -> hello.js

# 타입스크립트 설정파일 (tsconfig.json)
* tsconfig.json: 타입스크립트를 자바스크립트로 변환할 때의 설정을 정의해놓은 파일
* tsc --init > 뭔가 내용이 많음
* tsconfig.json 파일 직접 생성
* src, dist 폴더 생성
* hello.ts 파일만 src 폴더로 옮기고 tsc 수행하기
* target을 ES6로 바꿔보고 tsc 수행해보기

# ts-node 설치
* Node.js에서 Typescript를 실행시키는 도구
* ts 파일을 미리 컴파일하지 않고 바로 실행시키는 엔진
* npm i -g ts-node

# Typescript 실행 방법
1. tsc hello.ts > node hello.js (같은 폴더)
2. tsconfig.json 생성 > tsc > node dist/hello.js
3. ts-node 설치 > ts-node hello.ts (즉시 실행, js로 컴파일 안됨, 개발시에만 사용)