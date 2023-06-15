import './Contato.css'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Contato = ()=>{
    return(
        <section className='side'>
            <p>/links úteis</p>
            <div className='icones'>
                <a><EmailRoundedIcon style={{ fontSize: 26 }}></EmailRoundedIcon></a>
                <a><GitHubIcon style={{ fontSize: 25 }}></GitHubIcon></a>
                <a> <LinkedInIcon style={{ fontSize: 27 }}></LinkedInIcon></a>
            </div>
        </section>
            
    )
}

export default Contato;