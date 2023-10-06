import React from 'react-router-dom';
import homeLogo from '../../assets/logo.png';
import './Home.css';

const Home = () => {
    return(
        <>
            <div className='bg-green-900 flex justify-center'>
                <div className='container grid grid-cols-2 text-white'>
                    <div className='flex flex-col gap-4 items-center justify-center py-4'>
                        <h2 className='text-5xl font-bold'>Seja Bem-Vindx!</h2>
                        <p className='text-xl'>Veja Os Cursos Disponiveis ^^</p>

                        <div className='flex justify-around gap-4'>

                        <button className='rounded bg-white text-green-800 py-2 px-4'>Ver Cursos</button>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <img src={homeLogo} alt="Logo É De Todos" className='w-2/3'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;