import React, { useContext } from 'react';
import './Home.css'
import { useSpring, animated } from 'react-spring';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Home() {

  const Fontstyle = styled.div`
  font-family: 'edetodos', sans-serif;
`;

  const props = useSpring({
    from: { opacity: 0, transform: 'translatex(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 },
  });
  return (
    <animated.div style={props} className='h-56 flex item-center justify-end content-center pt-20 pe-20'>
      <div className='pt-20'>
        <Fontstyle className="text-slate-900 text-5xl ">É de Todos</Fontstyle>
        <h2 className="text-slate-900 text-xl ">O conhecimento é de todos e nosso curso também!</h2>
        <Link to="/login" className="my-4 rounded bg-indigo-400
         hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
          Voltar 
        </Link>
      </div>
      

    </animated.div>
  );
}

export default Home;