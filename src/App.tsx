import React from 'react';
import './App.css';

import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import Cadastro from './paginas/cadastro/Cadastro';
import Home from './paginas/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaCursos from './components/cursos/listaCursos/ListaCursos';
import FormularioCurso from './components/cursos/formularioCurso/FormularioCurso';
import DeletarCurso from './components/cursos/deletarCurso/DeletarCurso';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategorias/FormularioCategorias';
import DeletarCategoria from './components/categorias/deletarCategorias/DeletarCategorias';


function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cursos" element={<ListaCursos />} />
              <Route path="/cadastroCurso" element={<FormularioCurso />} />
              <Route path="/editarCurso/:id" element={<FormularioCurso />} />
              <Route path="/deletarCurso/:id" element={<DeletarCurso />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria/>} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria/>} />

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;