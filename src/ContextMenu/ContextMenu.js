import React from 'react'
import { contextMenu } from './ContextMenu.css'

function ContextMenu() {
  return (
    <React.Fragment>
      <div class="topnav">
        <a className='active'>Operacion</a>
        <a>Indicadores</a>
        <a>Información Cliente</a>
      </div>

      <div>Indique la línea de crédito que  quiere considerar</div>
      

    <div class="card">
      <img className='credit-line-Icon'
      src="https://i.imgur.com/mxq4K0D.png"
      alt="manos tomando dinero"/>

      <div class="card-body">
        <button class="Cartera-ordinaria-btn">Continuar</button>
      </div>
    </div>

    <div class="card">
      <img className='leasing-Icon'
      src="https://i.imgur.com/kuci2Vu.png"
      alt="casa"/>

      <div class="card-body">
        <button class="Cartera-ordinaria-btn">Continuar</button>
      </div>
    </div>

  </React.Fragment>

  );
}

export { ContextMenu };