import React from 'react';
import './footer.css';

import { FacebookLogo, InstagramLogo, GithubLogo } from '@phosphor-icons/react';

function Footer(){
    return(
        <>
            <div className='flex bg-green-900 text-white'>
                <div className='container flex justify-between item-center py-4'>
                    <div className='pl-5'>
                        <div className='houver:underline'>Sobre Nós</div>
                        <p className='text-xl font-bold'>É De Todos | Copyright: Grupo 6</p>
                        <p className='text-lg'>Acesse Nossas Redes Sociais</p>
                    </div>
                    <div className=''></div>
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