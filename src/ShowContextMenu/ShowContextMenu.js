import React, { useState } from "react";
import { showContextMenu } from "./ShowContextMenu.css";

function ShowContextMenu({ info }) {
  const dynamicImg = info.map((img) => {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img className="options-icon" src={img.src} alt={img.alt} />
        <div className="card-body">
          <h5 className="d-flex justify-content-center" id='card-txt'>Leasing</h5>
        </div>

        <div className="card-footer">
          <a className="d-flex justify-content-center" id="continue-btn">
            Continue
          </a>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="explanation-text" id="explanationContext">
        Indique la línea de crédito que quiere considerar
      </div>
      <div
        className="d-flex align-items-center justify-content-center"
        id="container-card">
        {dynamicImg}
      </div>
      <div className="d-flex justify-content-center">
        <div
          className="alert alert-warning alert-dismissible fade show "
          role="alert">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-exclamation-circle"
            viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>
          ㅤ|ㅤLas demás líneas de crédito no estarán disponibles por el
          momento.
        </div>
      </div>
    </>
  );
}

export { ShowContextMenu };
