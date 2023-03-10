import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import queryString from 'query-string';
import { getHeroesByName } from "../helpers";
import { HeroItem } from "../components";

export const SearchPage = () => {

   
   const navigate = useNavigate();
   const location = useLocation();
   const { q=''} = queryString.parse ( location.search );
   const { searchText, onInputChange} = useForm({searchText:q});
   const heroes = getHeroesByName( q );
   const showSearch = q.length === '';
   const showError = q.length > 0 && heroes.length===0;

   const onSearchSibmit = (event)=>{
        event.preventDefault();

        navigate(`?q=${ searchText }`);

   }

  return (
    <>
    <h1>Search</h1>
    <hr />
    <div className="row-5">
        <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form action="" onSubmit={ onSearchSibmit }>
                <input 
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }/>
                <button className="btn btn-outline-primary mt-2" type="submit" >Search</button>

            </form>
        </div>
        <div className="col-7">
            <h4>Results</h4>
            <hr />
            <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display : showSearch ? '': 'none'}}>Search a hero</div>
            <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display : showError ? '': 'none'}}>No hero with { q }</div>
            {
                heroes.map(h=> (<HeroItem heroe={ h } key={ h.id }/>))
            }
        </div>


    </div>
    
    </>
    
  )
}
