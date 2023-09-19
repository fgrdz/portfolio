import Animacao from '../Animacao';
import './SobreMim.css'
const SobreMim = ()=>{
    const tecnologias =[
        "Javascript",
        "Python",
        "SQL",
        "React.js",
        "Java",
        "Node.js",
        "HTML & CSS"
    ];
    return(
        <div className='sobreMim'>
            
            <h1 >Sobre Mim</h1>
            <div className='secaoSobre'>
            <p>
                Atualmente estou cursando Análise e Desenvolvimento de Sistemas e realizando estudos em diversas plataformas, para capacitação em várias tecnologias, voltadas ao desenvolvimento de software e estudo de dados.
            </p>
            <Animacao/>   
            </div>

           
            <p >
                Aqui estão algumas tecnologias que tenho utilizado:
            </p>
            <ul>
                    {tecnologias.map(function(item, i){
                    return(
                        <li key={i}>{item}</li>
                    )
                })}
                
            </ul> 
           
            
        </div>
    )
}

export default SobreMim