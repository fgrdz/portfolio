

import Contact from '../ContactMe';
import './Titulo.css'
import foto from './foto.png'
import Typewriter from 'typewriter-effect';

const Titulo = ()=>{
    return(
        <section id='inicio' className='titulos'>
            <img className= 'minhaFoto'src={foto} alt='Minha Foto, homem branco de perfil, camisa verde, óculos, sorrindo'></img>
            <div className='h1'>
                    <Typewriter onInit={(typewriter)=>{
                        typewriter.typeString('Oi, sou Julio Figueiredo.').callFunction(() => {
                            console.log('String typed out!');
                        }).pauseFor(2500)
                        
                        .callFunction(() => {
                            console.log('All strings were deleted');
                        })
                        .start();
                    }}/>
            </div>
            
            <h3>Eu crio algumas coisas legais.</h3>
            <p>Estudante de desenvolvimento de software e data science.</p>
            <Contact className='contact'/>
           
            
            </section>
    )
}

export default Titulo;

