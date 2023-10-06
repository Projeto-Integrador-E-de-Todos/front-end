import React from 'react';
import './App.css';
import './index.css';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    
    <div className='app '>
      <Navbar/>
      <Home/>
      <hr></hr>
      <Footer/>
    </div>
    </>
);
}
export default App;