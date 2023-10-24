import React from "react";
import FormularioCurso from "../formularioCurso/FormularioCurso";

import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

import "./ModalCurso.css";

function ModalCurso() {
  return (
    <>
      <Popup
        trigger={
          <button className="">
            Novo Curso
          </button>
        }
        modal
      >
        <div>
          <FormularioCurso />
        </div>
      </Popup>
    </>
  );
}

export default ModalCurso;
