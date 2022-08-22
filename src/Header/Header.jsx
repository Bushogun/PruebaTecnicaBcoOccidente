import React, { useEffect, useState } from "react";
import { ProfileHeader } from "./ProfileHeader";
import header from "./Header.css";
import BcoOcc1 from "../img/BcoOcc1.png";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <div className="navbar-brand">
            <img
              id="Isotipo-nav"
              src="https://i.imgur.com/VRVqKEr.png"
              alt="Logo Banco de Occidente"
            />
            <img
              id="Logotipo-nav"
              src="https://i.imgur.com/bct3zcF.png"
              alt="Banco de Occidente"
            />
            
            <ProfileHeader />
          </div>
        </div>
      </nav>
    </>
  );
}

export { Header };
