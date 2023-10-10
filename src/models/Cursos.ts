import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Cursos {
  id: number;
  nomecurso: string;
  preco: number;
  duracao: string;
  instrutor: string;
  descricao: string;
  prerequisitos: string;
  avaliacao: string [ ] ;
  foto: string;
  aulas: string [ ];
  nomeAulas: string [ ];
  categoria: Categoria | null;
  usuario: Usuario | null;
}