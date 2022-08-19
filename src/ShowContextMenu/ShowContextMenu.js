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

