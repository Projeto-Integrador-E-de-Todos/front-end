import React, { useContext, Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { Menu, Transition } from '@headlessui/react'
import './navbar.css'
import gu from '../../assets/img/gu.jpg'
import lupa from '../../assets/img/lupa.png'
import logo from '../../assets/logo.png'



function Navbar() {
  const navigate = useNavigate()

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
                <div className='hover:underline'>Cursos</div>
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
            
              
                <Menu>
                {({ open }) => (
                  <>

                    <Menu.Button className='cicle ring-4 ring-blue-300 focus:outline-none focus:ring-4 focus:ring-violet-300 pb-5'>
                      <div>
                       <img src={gu} alt="" className='user '/>
                      </div>
                    </Menu.Button>
                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-70 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-3 py-4 ">
              <Menu.Item>
                {({ active }) => (
                  <button className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    <Link to='/cadastro' className='hover:underline'>Matricule-se</Link>
                  </button>
                )}
              </Menu.Item>
              </div>
              <div className='px-3 py-4'>
                <Menu.Item>
                  {({ active }) => (
                    <button className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                     <Link to='/login' className='hover:underline'>Login</Link>
                    </button>
                  )}
                </Menu.Item>
              </div>
              
            <div className="px-3 py-4">
              <Menu.Item>
                {({ active }) => (
                  <button className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900' } group flex w-full items-center rounded-md px-2 py-2 text-sm`} >
                   <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                  </button>
                )}
              </Menu.Item>
            </div>
            
          </Menu.Items>
          </Transition> 
                </>
                )}
                </Menu>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar