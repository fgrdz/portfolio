import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Projeto.css'

const Projeto = (props)=>{
    return(
       
        <div>
            <div className="card">
                <a id='folder'><FolderOutlinedIcon style={{ fontSize: 28 }}></FolderOutlinedIcon></a>
                <h1>{props.titulo}</h1>
                <p>{props.descricao}</p>
                <p>{props.link}</p>    
                <a target='blank' href='https://github.com/fgrdz' id='git'><GitHubIcon style={{ fontSize: 25 }}></GitHubIcon></a>
            </div>
        </div>
    )
}

export default Projeto