import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Cursos from '../../../models/Cursos';
import Tema from '../../../models/Tema';
import { buscar, atualizar, cadastrar } from '../../../services/Service';


function FormularioCurso() {

    let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [temas, setTemas] = useState<Tema[]>([]);

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
  });

  const [cursos, setCursos] = useState<Cursos>({
    id: 0,
  nomecurso: '',
  preco: 0,
  duracao: '',
  instrutor: '',
  descricao: '',
  prerequisitos: '',
  avaliacao: [],
  foto: '',
  aulas: [],
  nomeAulas: [],
  categoria:   null,
  usuario:  null,
  });

  async function buscarCursosPorId(id: string) {
    await buscar(`/cursos/${id}`, setCursos, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarTemaPorId(id: string) {
    await buscar(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarTemas() {
    await buscar('/temas', setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
    if (id !== undefined) {
      buscarCursosPorId(id);
      console.log(tema);

    }
  }, [id]);

  useEffect(() => {
    setCursos({
      ...cursos,
      tema: tema,
    });
  }, [tema]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCursos({
      ...cursos,
      [e.target.name]: e.target.value,
      tema: tema,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate('/cursos');
  }

  async function gerarNovoCurso(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ cursos });

    if (id != undefined) {
      try {
        await atualizar(`/cursos`, cursos, setCursos, {
          headers: {
            Authorization: token,
          },
        });
        alert('Curso atualizado com sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao atualizar o Curso');
        }
      }
    } else {
      try {
        await cadastrar(`/cursos`, cursos, setCursos, {
          headers: {
            Authorization: token,
          },
        });

        alert('Curso cadastrado com sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao cadastrar o Curso');
        }
      }
    }
  }

  const carregandoTema = tema.descricao === '';



    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8"></h1>

            <form className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Nome do Curso</label>
                    <input

                        type="text"
                        placeholder="Nome do Curso"
                        name="titulo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Nome do Instrutor</label>
                    <input

                        type="text"
                        placeholder="Nome do Instrutor"
                        name="texto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Duração do Curso</label>
                    <input

                        type="text"
                        placeholder="Duração do Curso"
                        name="texto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Pré-requisitos</label>
                    <input

                        type="text"
                        placeholder="Pré-requisitos"
                        name="texto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Descrição do Curso</label>
                    <input

                        type="text"
                        placeholder="Descrição do Curso"
                        name="texto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Categoria</p>
                    <select name="tema" id="tema" className='border p-2 border-slate-800 rounded' >
                        <option value="" selected disabled>Selecione uma categoria</option>

                        <>
                            <option >Matemática </option>
                            <option >Português </option>
                            <option >História </option>
                            <option >Geografia </option>
                        </>

                    </select>
                </div>
                <button type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default FormularioCurso;