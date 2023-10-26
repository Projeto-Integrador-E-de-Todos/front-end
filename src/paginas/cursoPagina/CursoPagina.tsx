import  { useContext, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import Cursos from "../../models/Cursos";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../services/Service";
import livro from "../../assets/livro.png";
import VideoPlayer from "./VideoPlayer";



function CursoPagina() {

  const [post, setPost] = useState<Cursos>({} as Cursos);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const handleVideoSelect = (videoUrl: any) => {
    setSelectedVideo(videoUrl);
  };
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
  useEffect(() => {
    
    if (post.aulas && post.aulas.length > 0) {
      setSelectedVideo(post.aulas[0]);
    }
  }, [post.aulas]);

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
      <div className="bg-orange-50  pl-10 pt-10 pb-10">
        <h2 className="text-2xl font-bold">Porque você deve fazer este curso:</h2>
        <h2 className="text-xl">{post.descricao }</h2>
        <div className=" flex flex-row-reverse justify-between items-center">
          <div></div>
          
         <div className="container flex flex-col justify-center items-center  ">
            {post.aulas && post.aulas.map((videoUrl, index) =>  (
              <button className="py-2 bg-sky-500  box-border h-16 w-16 font-edetodos" key={index} onClick={() => handleVideoSelect(videoUrl)}>
                Aula {index + 1}
              </button>
            ))}
         </div>
       
          <div className="flex justify-center items-center pt-20 pb-20 px-36">
          {selectedVideo && <VideoPlayer videoUrl={selectedVideo} />}
        </div>
        </div>
        <h2 className="text-2xl font-bold">Se interessou pelo curso? Se Matricule hoje mesmo!</h2>
        <button className="bg-slate-400 text-xl">Matricule-se</button>
      </div>
    </section>
      
      </>
  );
}

export default CursoPagina;
