
import './Home.css'

import { useSpring, animated } from 'react-spring';

import Sobre from '../sobre/Sobre';


function Home() {


  const props = useSpring({
    from: { opacity: 0, transform: 'translatex(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 },
  });
  
  return (

      <>
        <section className='pb-96'>
          <animated.div style={props} className='relative h-56 flex item-center justify-end content-center pt-20 pe-20 '>
            <div className='pt-20'>
              <h2 className="text-slate-900 text-9xl font-creativo">É de Todos</h2>
              <h2 className="text-slate-900 text-3xl font-creativo">O conhecimento é de todos e nosso curso também!</h2>
            </div>
          </animated.div>
          </section>
        
          <section className='pb-96 pt-20' style={{ marginBottom: '2rem' }}><Sobre /></section>

          <section className='relative'></section>
      
      </>
      
    
  );
}

export default Home;