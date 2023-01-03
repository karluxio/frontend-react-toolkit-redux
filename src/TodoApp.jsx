import { useState } from "react"
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1)

  // const { data: todos = [], isLoading, isFetching } = useGetTodosQuery()
  const { data: todo, isLoading } = useGetTodoQuery(todoId)

  const nextTodo = () => {
    setTodoId(todoId + 1)
  }

  const previousTodo = () => {
    if (todoId === 1) return
    setTodoId(todoId - 1)
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? "True" : "False"}</h4>
      <pre></pre>
      <button onClick={nextTodo}>Next</button>
      <button onClick={previousTodo}>Previous</button>

      <pre>{JSON.stringify(todo, null, 2)}</pre>

      {/* <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'DONE: ' : 'Pending: '}</strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  )
}