import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Rodape.css'
const Rodape = ()=>{
    return(
        <div className='footer'>

            <p>Criado e desenvolvido por fgrdz</p>
            <p>Todos os direitos reservados ©</p>
                <div className='oculta'>
        <div className='icones'>
                <a href="mailto:jfigueiredo07@hotmail.com" ><EmailRoundedIcon style={{ fontSize: 26 }}></EmailRoundedIcon></a>
                <a target='blank'href='https://www.linkedin.com/in/julio-alves-figueiredo-237401256/'> <LinkedInIcon style={{ fontSize: 27 }}></LinkedInIcon></a>
            </div>
        </div>
        </div>
    )
}

export default Rodape