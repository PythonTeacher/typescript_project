// useAsync로 구현하기
import axios from "axios";
import { Async } from "react-async";

interface ToDoType {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const loadData = async() => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
}

function App() {
  return (
    <div>
      <Async promiseFn={loadData}>
        {({ data: todos, error, isLoading, reload }) => {
          if (isLoading) return <div>로딩중..</div>;
          if (error) return <div>에러가 발생했습니다.</div>;
          if (!todos) return null;

          return (
            <>
              <h1>ToDo List</h1>
              <ul>
                { todos.map((todo: ToDoType) => (
                  <li key={todo.id}>
                    {todo.id}. {todo.title}
                  </li>
                ))}
              </ul>
              <button onClick={reload}>Reloading..</button>
            </>
          )
        }}
      </Async>
  </div>
  )
}

export default App;