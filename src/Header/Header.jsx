import React, { useEffect, useState } from 'react';
import header from './Header.css'
import BcoOcc1 from '../img/BcoOcc1.png';

function Header() {
  return (
    <React.Fragment>
      {/* <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <ul>
          <li className='nav-item-logo'>
          <img
            src='https://i.imgur.com/VRVqKEr.png'
            alt='Logo-Banco-Occidente'
            />
          </li>
          <li className='nav-item'>
            <img
            src='https://i.imgur.com/bct3zcF.png'
            alt='Banco-Occidente'
            />
          </li>
          <li className='nav-item'> 
            <img
            src='https://i.imgur.com/r3RHS9p.jpg'
            alt='Carlos Gómez'
            class="img-fluid rounded-circle border border-dark border-3"
            />
      {/* <logo />
      <profilePicture />
      <Name />
      <ocupation />
    </header> 
          </li>
        </ul>      
      </nav> */}

<nav  class="navbar navbar-expand-lg bg-white">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
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
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 ml-lg-0">
        <li class="nav-item"/>
        
      </ul>
    </div>
  </div>
</nav>






    </React.Fragment>
    
  );
}

export { Header };
