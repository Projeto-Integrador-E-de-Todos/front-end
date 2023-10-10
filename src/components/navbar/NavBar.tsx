import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import './navbar.css'
import gu from '../../assets/img/gu.jpg'
import lupa from '../../assets/img/lupa.png'
import logo from '../../assets/logo.png'



function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent
  

  return (
    <>
     <div className='w-full bg-green-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">

          <Link to='/home' className='text-2xl font-bold uppercase'><img src={logo} alt="" className='logo'/></Link>


            <div className='flex flex-row gap-4 items-center '>
    
                <Link to='/home' className='hover:underline'>Home</Link>
                <Link to='/cadastro' className='hover:underline'>Matricule-se</Link>
                <Link to='/login' className='hover:underline'>Login</Link>
                <div className='hover:underline'>Cursos</div>
                <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                <div>
                  <label className="relative block">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <img src={lupa} alt=""/>
                  <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"> </svg>
                  </span>
                  <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Cursos..." type="text" name="search"/>
                  </label>
                </div>
            
                <div className='cicle border-4  border-purple-600 hover:border-purple-900'>
                  <img src={gu} alt="" className='user '/>
                </div> 
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar