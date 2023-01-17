
import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/api"


export const TodoApp = () => {
    // const {data: todos = [], isLoading } = useGetTodosQuery();
    const [todoId, setTodoId] = useState(1);
    const {data: todo = {}, isLoading } = useGetTodoQuery(todoId);
    const onPrevClick = ()=>{
        if(todoId === 1)
            return;
       setTodoId(todoId - 1);
    }
    const onNextClick = ()=>{
         setTodoId(todoId + 1);
    }
  return (
    <>
    <h1>Todos - RTK Query</h1>
    <hr />
    <h4>Loading ....: {isLoading ? 'True' : 'False' }</h4>
    <pre>
       { JSON.stringify(todo)
       }
    </pre>
    {/* <ul>
        {todos.map((todo)=><li key={todo.id}>
    <strong> {todo.completed?'DONE: ':'Pending: '}</strong>{todo.title}
        </li>)}
    </ul> */}

    <button onClick={ onPrevClick }>Previous</button>
    <button onClick={ onNextClick }>Next</button>
    </>
  )
}
