import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";


export const PokemonApp = () => {

    const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);
   
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch (getPokemons(page));
    
      
    }, []);
    if( isLoading )
       return (<h1>Loading ....</h1> );
    
    return (
        <> 
                <h1>Pokemon App</h1>
                <hr/>
                <ul>
                    {
                        pokemons.map( pokemon => 
                            <li key={ pokemon.name }>{ pokemon.name }</li>
                    )}
                    
                </ul>
                <button onClick={ () => dispatch(getPokemons( page )) }>
                    Next
                </button>
        </>)
    
  
  
}
