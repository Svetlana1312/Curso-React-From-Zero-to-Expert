import PropTypes from 'prop-types';


 const getMessage = () =>
 'Este es un mensaje en pantalla con anonima fuera del componente';

export const FirstApp = ({ title, subtitle, name}) => {
    //const newMessage = {
  //      message: 'Hola mundo',
   //     title: 'Svetlana'
   //  };
  // if (!title) 
   //     throw new Error('Title no esta establecido'); 
     
  return (
   <>
   <h1>{ title }</h1>
   <h2>{ subtitle }</h2>
   <p>{ name } </p>
   
   </> 
  )
}
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
   // title: 'Titulo por defecto',
    subtitle: 'Subtitulo por defecto',
    name: 'Nombre por defecto'
}
