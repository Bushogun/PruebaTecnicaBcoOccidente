import React from 'react'
import { showContextMenu } from './ShowContextMenu.css'

function ShowContextMenu() {
  return (
    <React.Fragment>
      <div className='explanation-text'>Indique la línea de crédito que  quiere considerar</div>

      <div className="card" id="container-card">
      <div className="d-flex align-items-center justify-content-center">
        <img className="options-icon" src="https://i.imgur.com/kuci2Vu.png" />
      </div>
      <a className="d-flex justify-content-center" id="description">
        Leasing
      </a>

      <div className="d-flex justify-content-center" id="continuar-boton">
        <p className="card-text">Continue</p>
      </div>
    </div>;


    
<div className='d-flex justify-content-center'>
    <div class="alert alert-warning alert-dismissible fade show " role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
      </svg>
      ㅤ|ㅤLas demás líneas de crédito no estarán disponibles por el momento.
    </div>
    </div>



    
    {/* <div className='d-flexCard justify-content-center'>
      <div className="card">
        <img className='options-icon'
        src="https://i.imgur.com/mxq4K0D.png"
        alt="manos tomando dinero"/>
        <div class="card-body">
          <a class="card-continue">Continuar</a>
        </div>
      </div>

<div class="card" style="width: 14rem; heigth: 14rem">
      <div class="d-flex align-items-center justify-content-center" >
      <img
      style="padding: 15% 5% 5% 5% "
      className="leasing-Icon"
      src="https://i.imgur.com/kuci2Vu.png"
      alt="casa"
      />
      </div>
      <a class="d-flex justify-content-center" id='description' style="text-decoration:none; padding-bottom: 10px">Leasing</a>
      
      <div class="d-flex justify-content-center" id='continuar-boton' style="background-color: #e8ecee; padding: 10px">
      <p class="card-text">Continue</p>
      </div>
      </div>
    </div> */}

  </React.Fragment>

  );
}

export { ShowContextMenu };

