// https://www.gitignore.io/ 사이트에서 node로 검색
// .gitignore 파일을 만들고 붙여넣기
// 지금까지 만든 파일 전부 commit하기

// 9. Axios
// npmjs.com에서 axios로 검색
// 브라우저와 node.js에서 사용할 수 있는 Promise 기반 HTTP 클라이언트 라이브러리
// npm install axios
// "type": "module" 추가 확인
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

const getUser = async() => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

getUser();