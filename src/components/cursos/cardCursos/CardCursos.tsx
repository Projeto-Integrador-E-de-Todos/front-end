import React from "react";
import { Link } from "react-router-dom";
import Cursos from "../../../models/Cursos";

interface CardCursosProps {
  post: Cursos;
}

function CardCursos({ post }: CardCursosProps) {
  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between bg-slate-200">
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          {/*<img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />*/}
          <h3 className="text-lg font-bold text-center uppercase ">
            Curso: {post.nomecurso}
          </h3>
        </div>
        <div className="p-4">
          <div>
            {" "}
            <img src={post.foto}></img>
          </div>
          <p className="text-lg font-semibold ">Instrutor: {post.instrutor}</p>
          <p>Descrição: {post.descricao}</p>
          <p>Categoria: {post.categoria?.assunto} </p>
          <p>Duração: {post.duracao}</p>
          <p>Pré-requisitos: {post.prerequisitos}</p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarCurso/${post.id}`}
          className="w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarCurso/${post.id}`}
          className="text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCursos;
