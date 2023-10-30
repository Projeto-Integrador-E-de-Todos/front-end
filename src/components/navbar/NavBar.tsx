import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext} from "../../contexts/AuthContext";
import { Menu} from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import "./navbar.css";
import perso from "../../assets/img/person.jpg";
import lupa from "../../assets/img/lupa.png";
import logo from "../../assets/logo444.png";




function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  
  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }



  return (
    <>
     <div className='relative z-20 w-full bg-gradient-to-b from-orange-500 via-yellow-300 font-bold to-opacity-90 text-black flex justify-center py-4'>
          <div className="container flex justify-between text-lg">

          <Link to='/home' className='text-2xl font-bold uppercase'><img src={logo} alt="" className='logo'/></Link>

          <div className="flex flex-row gap-4 items-center font-edetodos">
            <Link to="/home" className="hover:underline">
              Home
            </Link>
            
            <Menu as='div' className="relative">
              {({ open }) => (
                <>
                
                 <Menu.Button  className="hover:underline inline-flex w-full justify-center rounded-md  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ">
                      Cursos
                      <ChevronDownIcon className=" -mr-1 h-5 w-5 text-black " aria-hidden="true"/>
                 </Menu.Button>
                 {open &&(
                 <Menu.Items className="absolute right-4 mt-2 w-36 origin-top-right bg-white divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                  <div className="px-3 py-2">
                    <Menu.Item>
                      {({ active }) => (
                       <Link to='/cursos' className=''>
                        <button className={`${active ? 'bg-sky-500 text-white' : 'text-gray-900' } group flex w-full items-center rounded-md px-2 py-1 text-sm`} >
                        Todos os cursos
                        </button>
                       </Link>
                      )}
                   </Menu.Item>
                  </div>
                  <div className="px-3 py-2">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to='/cadastroCurso' className=''>
                        <button className={`${active ? 'bg-sky-500 text-white' : 'text-gray-900' } group flex w-full items-center rounded-md px-2 py-1 text-sm`} >
                        Novo Curso
                        </button>
                        </Link>
                          
                      )}
                    </Menu.Item>
                  </div>

                 </Menu.Items>
                )}
                </>
              )}
            </Menu>
            
            <Menu as='div' className="relative">
              {({ open }) => (
                <>
                
                 <Menu.Button  className="hover:underline inline-flex w-full justify-center rounded-md  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ">
                      Categorias
                      <ChevronDownIcon className=" -mr-1 h-5 w-5 text-black " aria-hidden="true"/>
                 </Menu.Button>
                 {open &&(
                 <Menu.Items className="absolute right-4 mt-2 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                  <div className="px-3 py-2">
                    <Menu.Item>
                      {({ active }) => (
                       <Link to='/categorias' className=''>
                        <button className={`${active ? 'bg-sky-500 text-white' : 'text-gray-900' } group flex w-full items-center rounded-md px-2 py-1 text-sm`} >
                        Todos as categorias
                        </button>
                       </Link>
                      )}
                   </Menu.Item>
                  </div>
                  <div className="px-3 py-2">
                    <Menu.Item>
                      {({ active }) => (
                           <Link to='/cadastroCategoria' className=''>
                           <button className={`${active ? 'bg-sky-500 text-white' : 'text-gray-900' } group flex w-full items-center rounded-md px-2 py-1 text-sm`} >
                           Nova categoria
                           </button>
                          </Link>
                      )}
                    </Menu.Item>
                  </div>

                 </Menu.Items>
                )}
                </>
              )}
            </Menu>
            <div>
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <img src={lupa} alt="" />
                  <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                    {" "}
                  </svg>
                </span>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Cursos..."
                  type="text"
                  name="search"
                />
              </label>
            </div>
            
              
            <Menu as='div' className="relative">
             
                {({ open }) => (
                  <>
                      <Menu.Button className=' cicle ring-4 ring-black focus:outline-none focus:ring-4 focus:ring-orange-950 pb-1'>
                        <div>
                         <img src={usuario.foto != "" ? usuario.foto : perso } alt="foto do usuario" className='user'/>
                        </div>
                      </Menu.Button>
                    
                      {open &&(
                        
                      
                        <Menu.Items className="absolute right-4 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {usuario.token ? (
                        <div>
                          <div className="px-3 py-4">
                            <Menu.Item>
                              {({ active }) => (
                                <Link to='/perfil' className=''><button className={`${active ? 'bg-sky-500 text-white' : 'text-gray-900' } group flex w-full items-center rounded-md px-2 py-2 text-sm`} >
                                Perfil
                                </button></Link>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="px-3 py-4">
                            <Menu.Item>
                              {({ active }) => (
                                <Link to='' onClick={logout} className=''><button className={`${active ? 'bg-sky-500 text-white' : 'text-gray-900' } group flex w-full items-center rounded-md px-2 py-2 text-sm`} >
                                Sair
                                </button></Link>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                        ) : (
                          <div>
                            <div className='px-3 py-4'>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link to='/login' className=''><button className={`${active ? 'bg-sky-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                  Login
                                  </button></Link>
                                )}
                              </Menu.Item>
                            </div>

                          <div className='px-3 py-4'>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link to='/cadastro' className=''><button className={`${active ? 'bg-sky-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                  Cadastre-se
                                  </button></Link>
                                )}
                              </Menu.Item>
                          </div>
                          </div>
                          
                        )}
                      </Menu.Items>
                      
                      )}
                 </>
                  )}
                
                  </Menu>
                  
              </div>
          </div>
        </div>
      
     
    </>
  );
}

export default Navbar;
