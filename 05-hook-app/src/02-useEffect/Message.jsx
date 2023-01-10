import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    const onMouseMove = ({ x, y })=>{
    console.log({ x,y });
    }
  window.addEventListener( 'mousemove', onMouseMove);
  return () => {
      window.removeEventListener('mousemove',onMouseMove);
    }
  }, []);
    
  return (
    <div>Usuario ya existe</div>
  )
}
