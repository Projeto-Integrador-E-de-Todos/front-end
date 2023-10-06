import { useNavigate, Link } from "react-router-dom";
import React from "react";

const Sobre = () =>{
    let navigate = useNavigate()
    return(
        <div>
            <h2 className="text-slate-900 text-5xl m-4">Sobre Nós</h2>
            <div>
                <button type="submit"
                    onClick={() => {navigate('/home') }}
                    className="houver:underline mx-4">
                    Login useNavigate
                </button>
                <Link to='/home' className="houver:underline mx-4">Login por Link</Link>
            </div>
            <div>
                <button type="submit"
                    onClick={() => {navigate('/login') }}
                    className="houver:underline mx-4">
                    Sobre useNavigate
                </button>
                <Link to='/login' className="houver:underline mx-4">Login por Link</Link>
            </div>
        </div>
    )
}

export default Sobre