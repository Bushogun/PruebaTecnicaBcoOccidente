import React from 'react';
import { Header } from './Header/Header';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';
import { ContextMenu } from './ContextMenu/ContextMenu'
import { ShowContextMenu } from './ShowContextMenu/ShowContextMenu';
import { BackButton } from './BackButton/BackButton'
import { useState, useEffect } from 'react';

const dataContextMenu = [
  {text: 'operacion', selected: true}, 
  {text: 'indicadores', selected: false}, 
  {text: 'informacionCliente', selected: true}
];

function App() {
 
  return (
  <React.Fragment>
      <Header /> 
      <BackButton/>
    <Body />
    <ContextMenu />
    <ShowContextMenu /> 

    <Footer />
    </React.Fragment>
  );
}

export default App;
