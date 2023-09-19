import './Contato.css'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Contato = ()=>{
    return(
        <section className='side'>
            <p>/links úteis</p>
            <div className='icones'>
                <a href="mailto:jfigueiredo07@hotmail.com" ><EmailRoundedIcon style={{ fontSize: 26 }}></EmailRoundedIcon></a>
                <a target='blank' href='https://github.com/fgrdz'><GitHubIcon style={{ fontSize: 25 }}></GitHubIcon></a>
                <a target='blank'href='https://www.linkedin.com/in/julio-alves-figueiredo-237401256/'> <LinkedInIcon style={{ fontSize: 27 }}></LinkedInIcon></a>
            </div>
        </section>
            
    )
}

export default Contato;