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
          <p className="pb-2">Curso de:</p>
          <h2 className="font-creativo text-5xl font-bold">
            {post.nomecurso}
          </h2>
        </div>
      </div>
      <div className="bg-orange-50 pl-60">
        <h2>{post.descricao}</h2>
      </div>
    </section>
      
      </>
  );
}

export default CursoPagina;
