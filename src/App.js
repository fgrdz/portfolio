import './App.css'
import Titulo from './componentes/Titulo';
import Contato from './componentes/Contato';
import SobreMim from './componentes/SobreMim';
import Projetos from './componentes/Projetos';
import Rodape from './componentes/Rodape';



function App() {
  document.title = 'Julio figueiredo';
  


  return (
    <section>
        <Titulo/>
        <Contato/>
        <SobreMim/>
        <Projetos/>
        <Rodape/>
     </section>
      
  );
}

export default App;
