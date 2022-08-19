import React from 'react';
import { Header } from './Header/Header';
import { Body } from './Body/Body';
import { Footer } from './Footer/Footer';
import { ContextMenu } from './ContextMenu/ContextMenu'
import { ShowContextMenu } from './ShowContextMenu/ShowContextMenu';
import { BackButton } from './BackButton/BackButton'
import { ResponseModel } from './Models/Response';
import { postData } from './util/HttpRequest';
import { useState, useEffect } from 'react';

const dataContextMenu = [
  {text: 'operacion', selected: true}, 
  {text: 'indicadores', selected: false}, 
  {text: 'informacionCliente', selected: true}
];


function App() {

  const [ informacion , setInformacion ] = useState(ResponseModel);

  const consultarInfo= () => {
    const url = "https://cors-anywhere.herokuapp.com/https://83sulg9hgc.execute-api.us-east-1.amazonaws.com/production/clientsbank";
    const body = JSON.stringify({ a: 1, b: "Textual content" });
    postData(url, body).then((data) => {
      setInformacion(data);});
      }

    useEffect (()=>{
      consultarInfo()
    },[]);

    
  return (
  <React.Fragment>
      <Header /> 
      <BackButton/>
    <Body data = {informacion} />
    <ContextMenu />
    <ShowContextMenu /> 
    <Footer />
    </React.Fragment>
  );
}

export default App;
