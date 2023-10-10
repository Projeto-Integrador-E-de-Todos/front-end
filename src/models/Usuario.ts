import Cursos  from "./Cursos";

export default interface Usuario {
  id: number;
  nome: string;
  login: string;
  data_nas: string;
  foto: string;
  senha: string;
  cursos?: Cursos | null;
}