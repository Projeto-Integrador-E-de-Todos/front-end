import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Menu} from "@headlessui/react";
import "./navbar.css";
import perso from "../../assets/img/person.jpg";
import lupa from "../../assets/img/lupa.png";
import logo from "../../assets/logo.png";


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
     <div className='relative z-20 w-full bg-gradient-to-t from-orange-500 via-yellow-300 to-opacity-90 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">

          <Link to='/home' className='text-2xl font-bold uppercase'><img src={logo} alt="" className='logo'/></Link>

          <div className="flex flex-row gap-4 items-center ">
            <Link to="/home" className="hover:underline">
              Home
            </Link>
            <Link to="/cursos" className="hover:underline">
              Cursos
            </Link>
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastroCategoria" className="hover:underline">
              cadastro categoria
            </Link>
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
                      <Menu.Button className=' cicle ring-4 ring-blue-300 focus:outline-none focus:ring-4 focus:ring-violet-300 pb-1'>
                        <div>
                         <img src={usuario.foto != "" ? usuario.foto : perso } alt="" className=' w-full h-full '/>
                        </div>
                      </Menu.Button>
                    
                      {open &&(
                        
                      
                        <Menu.Items className="absolute right-4 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
