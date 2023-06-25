import Projeto from '../Projeto'
import './Projetos.css'

const Projetos = ()=>{
    const projetos = [
        {
          titulo: 'Triangle',
          descricao: 'Uma aplicação React para controle de uma organização, permite cadastro e manipulação de usuários, além de customização',
          link: 'https://github.com/fgrdz/Triangle'
        },
        {
          titulo: 'Dogtech',
          descricao: 'Projeto de blog em react, utilizando rotas para criação e manutenção de aplicação multipáginas',
          link: 'https://github.com/fgrdz/dogtech'
        },
        {
            titulo: 'Projeto grid',
            descricao: 'Página feita utilizando apenas html e css, para fins de estudo de grid',
            link: 'https://github.com/fgrdz/ProjetoGrid'
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