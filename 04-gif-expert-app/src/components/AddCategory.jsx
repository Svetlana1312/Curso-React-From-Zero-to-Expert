import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
const [inputValue, setInputValue] = useState('');

const onInputChange = ({ target }) => {
 setInputValue(target.value);

}
const onSubmit = ( { target } )=>{
   event.preventDefault();
   const inputTrimmed = inputValue.trim();
   if(inputTrimmed.length<=1)
     return;
   //setCategories((categories) => [ inputValue, ...categories ]);
   onNewCategory( inputTrimmed );
   setInputValue('');
}
  return (
        <form onSubmit={ onSubmit } aria-label="form"> 
                <input 
                    type="text"
                    placeholder="Buscar gifs"
                    value={ inputValue }
                    onChange={ onInputChange }
                ></input>

        </form>
        
  )
}
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
