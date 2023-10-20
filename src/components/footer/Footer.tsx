import React from 'react';
import './footer.css';

import { FacebookLogo, InstagramLogo, GithubLogo } from '@phosphor-icons/react';

function Footer(){
    return(
        <>
            <div className='flex laranja justify-center text-white'>
                <div className='container flex flex-col items-center py-4'>
                        <p className='houver:underline'>Sobre Nós</p>
                        <p className='text-xl font-bold'>É De Todos | Copyright: 2023</p>
                        <p className='text-lg'>Acesse Nossas Redes Sociais</p>
                    <div className='flex '>  
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