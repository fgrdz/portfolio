import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { useState, useRef } from 'react';
import './contactme.css';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const emailRef = useRef(null);
  const [buttonText, setButtonText] = useState('Copiar E-mail');

  const handleEmailCopy = () => {
    const email = emailRef.current.textContent;
    navigator.clipboard.writeText(email);
    setEmailCopied(true);

    emailRef.current.classList.add('copied');

    setTimeout(() => {
      setEmailCopied(false);
      emailRef.current.classList.remove('copied');
      setButtonText('Copiar E-mail'); // Reset do texto do botão
    }, 4000);

    // Atualiza o texto do botão para "E-mail Copiado"
    setButtonText('E-mail Copiado');
  };

  return (
    <section className='ContactMeSection'>
      <div className='container-contact'>
       
          
        
       
        <div className='EmailCopy'>
            
          <span ref={emailRef}>jfigueiredo07@hotmail.com</span>
          <button className={emailCopied ? 'copied' : ''} onClick={handleEmailCopy}>
          <EmailRoundedIcon></EmailRoundedIcon>
            {buttonText}
            
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
