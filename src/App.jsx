import React from "react";
import { Header } from "./Header/Header";
import { Body } from "./Body/Body";
import { Footer } from "./Footer/Footer";
import { ContextMenu } from "./ContextMenu/ContextMenu";
import { ShowContextMenu } from "./ShowContextMenu/ShowContextMenu";
import { BackButton } from "./BackButton/BackButton";
import { ResponseModel } from "./Models/Response";
import { postData } from "./util/HttpRequest";
import { useState, useEffect } from "react";

function alertForWin() {  
  alert ("Clickea al desarrollador!");  
}
 {alertForWin()}
function App() {
  const [informacion, setInformacion] = useState(ResponseModel);
  const [ infoComponent, setInfoComponent ] = useState([
    { src:'https://i.imgur.com/mxq4K0D.png', alt:'manos' },
    { src:'https://i.imgur.com/kuci2Vu.png', alt:'casa' }
  ]);

  const consultarInfo = () => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://83sulg9hgc.execute-api.us-east-1.amazonaws.com/production/clientsbank";
    const body = JSON.stringify({ a: 1, b: "Textual content" });
    postData(url, body).then((data) => {
      setInformacion(data);
    });
  };

  useEffect(() => {
    consultarInfo();
  }, []);

  return (
    <>
      <Header />
      <BackButton />
      <Body data={informacion} />
      <ContextMenu setInfoComponent={ setInfoComponent } />
      <ShowContextMenu info={infoComponent} />
      <Footer />
    </>
  );
}

export default App;
