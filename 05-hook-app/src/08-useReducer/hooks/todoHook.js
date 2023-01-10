import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../todoReducer';

export const todoHook = () => {
    const initialState = [];
    const init = ()=>{
        return JSON.parse(localStorage.getItem('todos')) || [];
    };
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || []);
       
       
       }, [todos]);
       const onNewTodo = (newTodoDescription)=>{
        const newTodo= {
            id:new Date().getTime(),
            description: newTodoDescription,
            done: false
        }
        const action = {
            type:'[TODO] add todo',
            payload:newTodo
        };
       dispatch( action );
    }
    const onDeleteTodo = ( id )=>{
        
        const action = {
            type:'[TODO] delete todo',
            payload:id
        };
       dispatch( action );
    }
    const onToggleTodo = ( id )=>{
        
        const action = {
            type:'[TODO] toggle todo',
            payload:id
        };
       dispatch( action );
       console.log(action);
    }

  return {
    todos,
    onDeleteTodo,
    onNewTodo,
    onToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=>!todo.done).length
  }
}
