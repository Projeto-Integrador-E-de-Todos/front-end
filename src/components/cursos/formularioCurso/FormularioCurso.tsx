import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Cursos from "../../../models/Cursos";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";

function FormularioCurso() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [aulas, setAulas] = useState<any[""]>([]);

  const [aula, setAula] = useState("");

  const [nomeAulas, setNomeAulas] = useState<any[""]>([]);

  const [nomeAula, setNomeAula] = useState("");

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    ensino: "",
    assunto: "",
  });

  const [cursos, setCursos] = useState<Cursos>({
    id: 0,
    nomecurso: "",
    preco: 0,
    duracao: "",
    instrutor: "",
    descricao: "",
    prerequisitos: "",
    avaliacao: [],
    foto: "",
    aulas: [],
    nomeAulas: [],
    categoria: null,
    usuario: null,
  });

  async function buscarCursosPorId(id: string) {
    await buscar(`/cursos/${id}`, setCursos, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoria() {
    await buscar("/categoria", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarCategoria();
    if (id !== undefined) {
      buscarCursosPorId(id);
      console.log(categoria);
    }
  }, [id]);

  useEffect(() => {
    setCursos({
      ...cursos,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCursos({
      ...cursos,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate("/cursos");
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
        alert("Curso atualizado com sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("O token expirou, favor logar novamente");
          handleLogout();
        } else {
          alert("Erro ao atualizar o Curso");
        }
      }
    } else {
      try {
        await cadastrar(`/cursos`, cursos, setCursos, {
          headers: {
            Authorization: token,
          },
        });

        alert("Curso cadastrado com sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("O token expirou, favor logar novamente");
          handleLogout();
        } else {
          alert("Erro ao cadastrar o Curso");
        }
      }
    }
  }

  const carregandoCategoria = categoria.assunto === "";

  function cadastrarAula() {
    if (aula !== "") {
      setCursos({
        ...cursos,
        aulas: [...cursos.aulas, aula],
      });
      setAulas([...aulas, aula]);
      setAula("");
    } else {
      alert("O campo não pode estar em branco");
    }
    console.log(aulas);
  }

  function cadastrarNomeAula() {
    if (nomeAula !== "") {
      setCursos({
        ...cursos,
        nomeAulas: [...cursos.nomeAulas, nomeAula],
      });
      setNomeAulas([...nomeAulas, nomeAula]);
      setNomeAula("");
    } else {
      alert("O campo não pode estar em branco");
    }
    console.log(nomeAulas);
  }

  function removerNomeAula(remove) {
    const nomeAulasFiltered = nomeAulas.filter(
      (nomeAula) => nomeAula !== remove
    );
    setNomeAulas(nomeAulasFiltered);
  }

  function removerAula(remove) {
    const aulasFiltered = aulas.filter((aula) => aula !== remove);
    setAulas(aulasFiltered);
  }

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8"></h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoCurso}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nomecurso">Nome do Curso</label>
          <input
            value={cursos.nomecurso}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome do Curso"
            name="nomecurso"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="instrutor">Nome do Instrutor</label>
          <input
            value={cursos.instrutor}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome do Instrutor"
            name="instrutor"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="duracao">Duração do Curso</label>
          <input
            value={cursos.duracao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Duração do Curso"
            name="duracao"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="prerequisitos">Pré-requisitos</label>
          <input
            value={cursos.prerequisitos}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Pré-requisitos"
            name="prerequisitos"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do Curso</label>
          <input
            value={cursos.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descrição do Curso"
            name="descricao"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Imagem</label>
          <input
            value={cursos.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Link para a foto"
            name="foto"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Categoria do Curso</p>
          <select
            name="Categoria"
            id="Categoria"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma Categoria
            </option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.assunto}</option>
              </>
            ))}
          </select>
        </div>

        <div className="flex flex-col w-64 gap-4">
          <label htmlFor="">Aulas</label>
          <input
            type="text"
            placeholder="Aulas"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAula(e.target.value)
            }
            value={aula}
            className="border border-slate-700 p-1 text-lg rounded p-2"
          />
          <button
            type="button"
            className="bg-orange-300 text-slate-800 p-1 text-lg rounded"
            onClick={() => cadastrarAula()}
          >
            Adicionar aula(s)
          </button>
        </div>
        <div>
          <h3>Aulas cadastradas</h3>
          <div className="flex gap-4 border border-slate-700 rounded p-2">
            {aulas.map((aula) => (
              <span
                className="p-1 bg-teal-100 cursor-pointer hover:bg-orange-100"
                onClick={() => removerAula(aula)}
              >
                {aula}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-64 gap-4">
          <label htmlFor="">Nome das aulas</label>
          <input
            type="text"
            placeholder="Nome das aulas"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNomeAula(e.target.value)
            }
            value={nomeAula}
            className="border border-indigo-800 p-1 text-lg"
          />
          <button
            type="button"
            className="bg-orange-300 text-slate-800 p-1 text-lg rounded"
            onClick={() => cadastrarNomeAula()}
          >
            Adicionar nome da(s) aula(s)
          </button>
        </div>
        <div>
          <h3>Nome das Aulas cadastradas</h3>
          <div className="flex gap-4 border border-slate-700 rounded p-2">
            {nomeAulas.map((nomeAula) => (
              <span
                className="p-1 bg-teal-100 cursor-pointer hover:bg-orange-100"
                onClick={() => removerNomeAula(nomeAula)}
              >
                {nomeAula}
              </span>
            ))}
          </div>
        </div>

        <button
          disabled={carregandoCategoria}
          type="submit"
          className="rounded disabled:bg-slate-200 bg-orange-400 hover:bg-orange-500 text-white font-bold w-1/2 mx-auto block py-2"
        >
          {carregandoCategoria ? (
            <span>Carregando</span>
          ) : id !== undefined ? (
            "Editar"
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormularioCurso;
