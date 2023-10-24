import React from 'react';
import './footer.css';

import {GithubLogo } from '@phosphor-icons/react';

function Footer(){
    return(
        <>
            <div className='flex h-100 bg-gradient-to-t from-orange-500 via-yellow-300 to-opacity-90 justify-center text-black'>
                <div className='container flex flex-col items-center py-4'>
                        <p className='text-xl font-bold mb-2'>É De Todos | Copyright: 2023</p>
                        <p className='text-lg '>Acesse Nosso GitHub</p>
                    <div className='flex '>  
                        <a href='https://github.com/Projeto-Integrador-E-de-Todos' target='_blank'><GithubLogo size={48} weight='bold'/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer