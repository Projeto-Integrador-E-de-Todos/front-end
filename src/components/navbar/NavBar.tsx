import React from 'react';

function Navbar(){
    return(
        <>
            <div className='w-full bg-green-900 text-white flex justify-center py-4'>
                <div className='container flex justify-between text-lg'>
                    <div className='text-2xl font-bold uppercase'>É De Todos</div>

                    <div className='flex gap-4'>
                        <div className='houver:underline'>Cursos</div>
                        <div className='houver:underline'>Aulas Inscritas</div>
                        <div className='houver:underline'>Meu Perfil</div>
                        <div className='houver:underline'>Logout</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar