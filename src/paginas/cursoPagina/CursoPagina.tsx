import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cursos from "../../models/Cursos";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../services/Service";
import livro from "../../assets/livro.png";


function CursoPagina() {

  const [post, setPost] = useState<Cursos>({} as Cursos);
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  async function buscarPorId(id: string) {
    try {
      await buscar(`/cursos/${id}`, setPost, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        console.error("Erro ao apagar o Curso:", error); // Adicione esta linha para registrar detalhes do erro no console.
        alert("Erro ao apagar o Curso. Verifique o console para detalhes.");
        handleLogout();
      }
    }
  }
  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);
  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  return (

    

    <>
    <section>
      <div className="bg-orange-100 w-13 flex flex-row justify-center items-center">
        <div className="pr-2">
          <img src={livro} alt="" className="h-36" />
        </div>
        <div>
          <h2 className="font-creativo text-5xl font-bold">
            {post.nomecurso}
          </h2>
        </div>
      </div>
      <div className="bg-orange-50 justify-center pl-10 pt-10 pb-10">
        <h2 className="text-2xl font-bold">Porque você deve fazer este curso:</h2>
        <h2 className="text-xl">{post.descricao}</h2>
        <div className="flex justify-center items-center pt-20 pb-20">
          <iframe width="560" height="315" src={post.aulas} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h2 className="text-2xl font-bold">Se interessou pelo curso? Se Matricule hoje mesmo!</h2>
        <button className="bg-slate-400 text-xl">Matricule-se</button>
      </div>
    </section>
      
      </>
  );
}

export default CursoPagina;
