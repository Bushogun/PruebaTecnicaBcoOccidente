import React from 'react'


function Body(props) {

  return (
    <>
      <div className='d-flex justify-content-center'>{props.data.nombre}</div>
      <div className='d-flex justify-content-center'> NIT: {props.data.nit}</div>
      <div className='d-flex justify-content-center'>Capa: {props.data.capa} * Segmento: {props.data.segmento}</div>
      
    </>
  );
}

export { Body };
