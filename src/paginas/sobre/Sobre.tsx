import { useNavigate, Link } from "react-router-dom";
import React from "react";

const Sobre = () =>{
    let navigate = useNavigate()
    return(
         
        <>
             <div className='relative bg-lime-50 h-56 flex item-center justify-center content-center pt-20 pe-20 pb-96'>
            <div className='pt-20'>
              <h2 className="text-slate-900 text-3xl text-center font-creativo">Nunca é cedo demais</h2>
              <p className="text-slate-900 text-1xl text-center font-creativo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </>
    )
}

export default Sobre