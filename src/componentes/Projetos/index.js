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
            titulo: 'Projeto Dog Daily',
            descricao: 'Página feita utilizando React e axios, manipulando uma API gratuita pública, mais detalhes e link do deploy estão no repositório',
            link: 'https://github.com/fgrdz/Dog'
          },
        {
            titulo: 'Translator',
            descricao: 'Página feita com React, que consome uma API de tradução gratuita, nela é possível traduzir frases para diversos idiomas, foi feita com um design simples e intuitivo, link do deploy no repositório',
            link: 'https://github.com/fgrdz/translator'
        },
        {
            titulo: 'Quotaria',
            descricao: 'Página feita com React, que consome uma API contendo quotes de séries famosas, nela é possível filtrar e visualizar citações de diversas séries, foi feita utilizando React',
            link: 'https://github.com/fgrdz/translator'
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