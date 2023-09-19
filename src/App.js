import './App.css'
import Titulo from './componentes/Titulo';
import Contato from './componentes/Contato';
import SobreMim from './componentes/SobreMim';
import Projetos from './componentes/Projetos';
import Rodape from './componentes/Rodape';
import Animacao from './componentes/Animacao';




function App() {
  document.title = 'Julio figueiredo';
  


  return (
    <section>
       
        <Titulo/>
        <Contato/>
        <div className='sobre'>
            <SobreMim/>
            
        </div>

        <Projetos/>
        <Rodape/>
     </section>
      
  );
}

export default App;
