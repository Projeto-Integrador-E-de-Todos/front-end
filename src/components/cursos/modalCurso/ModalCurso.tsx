import React from 'react';
import FormularioCurso from '../formularioCurso/FormularioCurso';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalCurso.css'

function ModalCurso() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Novo Curso</button>} modal>
        <div>
          <FormularioCurso />
        </div>
      </Popup>
    </>
  );
}

export default ModalCurso;