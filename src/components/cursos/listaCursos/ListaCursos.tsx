import  { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import CardCursos from '../cardCursos/CardCursos';
import Cursos from '../../../models/Cursos';
import { FadeLoader } from 'react-spinners';

function ListaCursos() {
  const [cursos, setCursos] = useState<Cursos[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/');
    }
  }, [token]);

  async function buscarCursos() {
    try {
      await buscar('/cursos', setCursos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarCursos();
  }, [cursos.length]);
  return (
    <>
      {cursos.length === 0 && (
       <div className=" flex justify-center item-end p-28">
       <FadeLoader
       color="#ff009d"
       height={18}
       margin={2}
       radius={3}
       speedMultiplier={2}
       width={8}
     />
     </div>
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {cursos.map((cursos) => (
          <CardCursos key={cursos.id} post={cursos} />
        ))}
      </div>
    </>
  );
}

export default ListaCursos;