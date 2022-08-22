import React from 'react'
import { contextMenu } from './ContextMenu.css'
import { useState } from 'react'
function ContextMenu({ setInfoComponent }) {
    const [tabs, setTabs] = useState({
      tabOne: true,
      tabTwo: false,
      tabThree: false
    })

    const handleTabs = (property) => {
      let img = null;
      
      if (property === 'tabOne'){
        img = [
          { src:'https://i.imgur.com/mxq4K0D.png', alt:'manos' },
          { src:'https://i.imgur.com/kuci2Vu.png', alt:'manos' }
        ];
      } else if (property === 'tabTwo') {
        img = [
          { src:'https://i.imgur.com/mxq4K0D.png', alt:'manos' },
        ];
      } else {
        img = [
          { src:'https://i.imgur.com/mxq4K0D.png', alt:'manos' },
          { src:'https://i.imgur.com/kuci2Vu.png', alt:'manos' },
          { src:'https://i.imgur.com/mxq4K0D.png', alt:'manos' },
        ];
      }
      setInfoComponent(img);

      const tab = {
        tabOne: false,
        tabTwo: false,
        tabThree: false
      }
      tab[property] = true;
      setTabs(tab);
    }
  return (
    <>
      <div className="d-flex justify-content-center" id='contxtmnu'>
      <button className={tabs.tabOne ? 'active': 'unActive'}  onClick={() => handleTabs('tabOne')} >Operacion</button>
      <button className={tabs.tabTwo ? 'active': 'unActive'}  onClick={() => handleTabs('tabTwo')} >Indicadores</button>
      <button className={tabs.tabThree ? 'active': 'unActive'}  onClick={() => handleTabs('tabThree')} >Información Cliente</button>
      </div>
    </>

);
}

export { ContextMenu };