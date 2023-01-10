import { useEffect, useLayoutEffect, useReducer } from "react";
import { todoHook } from "./hooks/todoHook";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";


export const TodoApp = () => {
  const {todos, todosCount, pendingTodosCount, onDeleteTodo, onNewTodo, onToggleTodo }= todoHook();
  return (
   <>
    <h1>TodoApp: { todosCount} <small>Pendientes: { pendingTodosCount}</small></h1>
    <hr/>
    <div className="row">
        <div className="col-7">
            <h4>Lista de Todos</h4>
            <TodoList todos={ todos } onDeleteTodo={ onDeleteTodo} onToggleTodo= { onToggleTodo }/>

        </div>
    <div className="col-5">
        <h4>Agregar Todo</h4>
        <TodoForm onNewTodo={ onNewTodo }/>
    </div>

    </div>
    
   
   </> 


  )
}
