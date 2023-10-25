

import './sobre.css';
import icone1 from "../../assets/img/personalized_learning_icon.png"
import icone2 from "../../assets/img/empower_teachers_icon.png";
import icone3 from "../../assets/img/trusted_content_icon.png";



const Sobre = () =>{
   
    return(
         
        <>
           <div className='relative bg-cyan-700 w-full flex item-center justify-center content-center pb-40'  >
            <div className='pt-20'>
              <h1 className="text-yellow-300 text-6xl text-center font-creativo margin-bottom-h1">Por que a   É de Todos   funciona?</h1>
              <div className="flex ">
                <div className="sobre-box border my-2 p-1 div-com-espaco" >
                <img className="mx-auto my-auto max-w-full pt-8" src={icone1} alt="Ícone" />
                    <h2 className="text-yellow-400 text-4xl text-center  mb-20">Aprendizagem personalizada</h2>
                    <p className="text-center">Os alunos praticam no próprio ritmo, solucionando primeiramente suas dificuldades de compreensão e, depois, acelerando o aprendizado.</p>     
                </div>
                <div className="sobre-box border my-2 p-1 div-com-espaco">
                    <img className="mx-auto my-auto max-w-full pt-8 " src={icone2} alt="Ícone" />
                    <h2 className="text-yellow-400 text-4xl text-center   mb-20">Ferramentas para a capacitação de professores</h2>
                    <p className="text-center ">Com a É de Todos, os professores conseguem identificar as dificuldades de compreensão de seus alunos, personalizar instruções e atender às necessidades de cada um deles.</p>     
                </div>
                <div className="sobre-box border my-2 p-1 div-com-espaco">
                    <img className="mx-auto my-auto max-w-full pt-2" src={icone3} alt="Ícone" />
                    <h2 className="text-yellow-400 text-4xl text-center   mb-20">Conteúdo confiável</h2>
                    <p className="text-center">Criada por especialistas, a biblioteca da É de Todos de prática e lições confiáveis abrange matemática, ciências e muito mais. </p>     
                </div>
                
            </div>
            </div>
          </div>
        </>
    )
}

export default Sobre