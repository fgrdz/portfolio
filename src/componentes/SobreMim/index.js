import './SobreMim.css'
const SobreMim = ()=>{
    const tecnologias =[
        "Javascript",
        "Python",
        "React.js",
        "Java",
        "Node.js",
        "HTML & CSS"
    ];
    return(
        <div className='sobreMim'>
            <h1 >Sobre Mim</h1>
            <p>
                Atualmente estou cursando Análise e Desenvolvimento de Sistemas e realizando estudos em diversas plataformas, para capacitação em várias tecnologias, principalmente voltadas ao desenvolvimento web.
            </p>
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