import React from 'react'
import { body } from './Body.css'

function Body(props) {

  return (
    <>
      <div className='d-flex justify-content-center' id="title-client">{props.data.nombre}</div>
      <div className='d-flex justify-content-center' id="nit-info"> NIT: {props.data.nit}</div>
      <div className='d-flex justify-content-center' id="infoComplementary">Capa: {props.data.capa} ㅤ*ㅤ Segmento: {props.data.segmento}</div>
      
    </>
  );
}

export { Body };
