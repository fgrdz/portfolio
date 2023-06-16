import Projeto from '../Projeto'
import './Projetos.css'

const Projetos = ()=>{
    const projetos = [
        {
          titulo: 'projetin',
          descricao: 'descricazinha',
          link: ''
        },
        {
          titulo: 'projetao',
          descricao: 'zinha',
          link: ''
        },
        {
            titulo: 'projetao',
            descricao: 'zinha',
            link: ''
          }
      ]

    return(
        <div className="projeto-container">
            <h1 className='titulo'>Projetos</h1>
            <div className="projeto-grid">
                {projetos.map((projeto)=>(<Projeto
                    titulo = {projeto.titulo}
                    descricao= {projeto.descricao}
                    link = {projeto.link}
                   
                />))}

            </div>

        </div>
    )
}
export default Projetos