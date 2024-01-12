import axios from "axios";
import { useEffect, useState } from "react";

// https://jsonplaceholder.typicode.com/
interface ToDoType {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

function ToDoList() {
  const [todos, setTodos] = useState<ToDoType[]>([]);

  const fetchData = async() => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(response.data);
    } catch(e) {
      console.error(e);
    }
  }

  // 마운트 시 실행하기
  useEffect(() => {
    console.log('mount 시점에 호출')
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  }

  return (
    <>
      <h1>Todo List</h1>
      <div>
        <button onClick={handleClick}>불러오기</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.id}. {todo.title} {todo.completed && '(완료)'}</li>
        ))}
      </ul>
    </>
  )
}

export default ToDoList;