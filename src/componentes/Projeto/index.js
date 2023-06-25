import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Projeto.css'

const Projeto = (props)=>{
    return(
       
        <div>
            <div className="card">
                <header>
                    <a id='folder' href={props.link} target='blank'><FolderOutlinedIcon style={{ fontSize: 28 }}></FolderOutlinedIcon></a>
                    <a target='blank' href='https://github.com/fgrdz' id='git'><GitHubIcon style={{ fontSize: 25 }}></GitHubIcon></a>
                </header>
                <h1>{props.titulo}</h1>
                <p>{props.descricao}</p>
            </div>
            
        </div>
    )
}

export default Projeto