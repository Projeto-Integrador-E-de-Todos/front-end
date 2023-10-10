import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'



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
          <Link to='/home' className='text-2xl font-nunito sans-serif uppercase'>Éde<span>Todos</span></Link>

            <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/cadastro' className='hover:underline'>Matricule-se</Link>
            <Link to='/login' className='hover:underline'>Login</Link>
            <div className='hover:underline'>Nossos Cursos</div>
            <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar