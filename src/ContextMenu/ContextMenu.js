import React from 'react'
import { contextMenu } from './ContextMenu.css'

function ContextMenu() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <a className='active'>Operacion</a>
        <a>Indicadores</a>
        <a>Información Cliente</a>
      </div>


      </React.Fragment>

);
}

export { ContextMenu };