// Lifecycle 메소드
// 1. 마운트  : DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트라고 함
// 2. 업데이트 : props가 바뀔때, state가 바뀔때, 부모컴포넌트가 리렌더링될때, thid.forceUpdate로 강제 랜더링을 트리거할 때
// 3. 언마운트 : 컴포넌트를 DOM에서 제거하는 것을 언마운트라고 함

// 두번 실행되는 이유는 리액트에서 StrictMode사용 시 예상치 못한 부작용을 detect하기 위해 두번 호출
// -> 개발 시에는 코드의 잠재적인 issue, 예상치 못한 부작용을 detect하기 위해 StrictMode를 적용함
// -> 운영 시에는 StrictMode 빼기
import { Component } from "react";

class LifeCycle extends Component {
  // 클래스형 컴포넌트에서 사용 : state
  // 함수형 컴포넌트에서 사용 : useState
  state = {
    count: 0
  };
  
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");

    return (
      <div>
        <h1>
          {this.state.count}
        </h1>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }

}

export default LifeCycle;
