import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

// import { toastAlerta } from '../../utils/toastAlerta'
function Perfil() {
  const navigate = useNavigate()

  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token === "") {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      navigate("/login")
    }
  }, [usuario.token])

  return (
    <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
      <div className='w-full h-72 object-cover border-b-8 border-white' />
      <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-6rem] h-72 flex flex-col bg-amber-600 text-white text-2xl items-center justify-center">
        <p>Nome: {usuario.nome} </p>
        <p>Email: {usuario.login}</p>
      </div>
    </div>
  )
}

export default Perfil
