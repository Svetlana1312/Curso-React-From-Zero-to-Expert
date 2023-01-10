
import { useFetchGifs } from "../hooks";
import { GifItem } from "./";
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category ); 


  return (
    <div>
        <h2> { category }</h2>
        {isLoading && <h2>Cargando...</h2>}
        <div className="card-grid">
            {
            images.map((image) => 
            <GifItem key={ image.id } { ...image }/>)
            }
        </div>

    </div>
  )
}
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}


