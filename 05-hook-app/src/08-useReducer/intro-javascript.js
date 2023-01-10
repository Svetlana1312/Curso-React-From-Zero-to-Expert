const initialState = [{
    id:1,
    todo:"Comprar pan",
    done:false
}];
const todoReducer = (state = initialState, action = {})=>{
    if(action.type === '[TODO] add todo')
      return [ ...initialState, action.payload ];
    return state;
}

let todos = todoReducer();
const newTodo = {
    id:2,
    todo:"Comprar leche",
    done:false
};
const addTodAction = {
    type: '[TODO] add todo',
    payload: newTodo
}
todos = todoReducer(todos, addTodAction);
console.log(todos);
