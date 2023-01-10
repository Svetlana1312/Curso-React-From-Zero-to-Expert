import { useForm } from '../hooks/useForm';

export const TodoForm = ({ onNewTodo }) => {
    const {description, onInputChange, onResetForm} = useForm({
        description:''
    });
    
    const formSubmit= (event)=> {
        event.preventDefault();
        onNewTodo(description);
        onResetForm();
    } 
  return (
    
    <form>
            <input
                type="text"
                placeholder="Que hay que hacer?"
                name="description"
                className="form-control" 
                onChange={ onInputChange }
                value={ description}/>
            <button type="submit" className="btn btn-outline-primary mt-1"
            onClick={ formSubmit }> Agregar</button>
     </form>
  )
}
