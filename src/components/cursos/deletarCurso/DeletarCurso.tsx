import  { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Cursos from "../../../models/Cursos";
import { buscar, deletar } from "../../../services/Service";

function DeletarCurso() {
  const [cursos, setCursos] = useState<Cursos>({} as Cursos);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/cursos/${id}`, setCursos, {
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

  function retornar() {
    navigate("/cursos");
  }

  async function deletarCurso() {
    try {
      await deletar(`/cursos/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Curso apagado com sucesso");
    } catch (error) {
      alert("Erro ao apagar o Curso");
    }

    retornar();
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar curso</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o curso a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
          Curso
        </header>
        <div className="p-4">
          <p className="text-xl h-full">{cursos.nomecurso}</p>
          <p>{cursos.nomeAulas}</p>
        </div>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
            onClick={deletarCurso}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCurso;
