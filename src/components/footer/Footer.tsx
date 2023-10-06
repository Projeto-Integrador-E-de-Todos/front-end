import React from 'react';
import './footer.css';

import { FacebookLogo, InstagramLogo, GithubLogo } from '@phosphor-icons/react';

function Footer(){
    return(
        <>
            <div className='flex justify-center bg-green-900 text-white'>
                <div className='container flex row item-center py-4 px-15 '>
                    <div className='border-15'>
                        <div className='houver:underline'>Sobre Nós</div>
                        <p className='text-xl font-bold'>É De Todos | Copyright: Grupo 6</p>
                        <p className='text-lg'>Acesse Nossas Redes Sociais</p>
                    </div>
                    <div className='px-50'></div>
                    <div className='flex py-15'>  
                        <GithubLogo size={48} weight='bold'/>
                        <FacebookLogo size={48} weight='bold'/>
                        <InstagramLogo size={48} weight='bold'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer