import './Titulo.css'
import Typewriter from 'typewriter-effect';
const Titulo = ()=>{
    return(
        <section className='titulos'>
            
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
            <p>Sou estudante de análise e desenvolvimento de sistemas, sou um grande entusiasta de tecnologia 
                e atualmente estou aprendendo tecnologias e habilidades voltadas para o desenvolvimento web.</p>
        </section>
    )
}

export default Titulo;

