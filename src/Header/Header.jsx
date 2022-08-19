import React, { useEffect, useState } from 'react';
import header from './Header.css'
import BcoOcc1 from '../img/BcoOcc1.png';

function Header() {
  return (
    <React.Fragment>
      <nav  className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <div/>    

          <img id= "Isotipo-nav"
                  src='https://i.imgur.com/VRVqKEr.png'
                  alt='Logo Banco de Occidente'
                  />
          <img id= "Logotipo-nav"
                  src='https://i.imgur.com/bct3zcF.png'
                  alt='Banco de Occidente'
                  />
          <div/>      
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 ml-lg-0">
              <li className="nav-item"/>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
    
  );
}

export { Header };
