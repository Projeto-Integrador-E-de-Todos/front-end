
import { Link } from "react-router-dom";
import Categorias from "../../../models/Categoria";

interface CardCategoriasProps {
  post: Categorias;
}

function CardCategorias({ post }: CardCategoriasProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-sky-400 text-black font-bold text-2xl">
        Categorias : {post.ensino}
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{post.ensino}</p>
      <p className="p-8 text-3xl bg-slate-200 h-full">{post.assunto}</p>
      <div className="flex">
        <Link
          to={`/editarCategoria/${post.id}`}
          className="w-full text-slate-100 bg-sky-500 hover:bg-sky-400 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarCategoria/${post.id}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
