import React from 'react';
import { Header } from './Header/Header';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';
import { ContextMenu } from './ContextMenu/ContextMenu';
import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const dataContextMenu = [
  {text: 'operacion', selected: true}, 
  {text: 'indicadores', selected: false}, 
  {text: 'informacionCliente', selected: true}
];

function App() {
  return (
  <React.Fragment>
      <Header /> 
     <h1>You're doing good</h1>
    <Body />
    <ContextMenu /> 
    <Footer />
    </React.Fragment>
  );
}

export default App;
