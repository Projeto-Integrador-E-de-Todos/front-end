import { useNavigate, Link } from "react-router-dom";
import React from "react";

const Login = () =>{
    let navigate = useNavigate()
    return(
        <div>
            <h2 className="text-slate-900 text-5xl m-4">Login</h2>
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
                    onClick={() => {navigate('/sobre_nos') }}
                    className="houver:underline mx-4">
                    Sobre useNavigate
                </button>
                <Link to='/sobre_nos' className="houver:underline mx-4">Sobre Nós</Link>
            </div>
        </div>
    )
}

export default Login