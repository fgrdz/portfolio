import './App.css'
import Titulo from './componentes/Titulo';
import Contato from './componentes/Contato';
import SobreMim from './componentes/SobreMim';


function App() {
  document.title = 'Julio figueiredo';

  return (
    <section>
        <Titulo/>
        <Contato/>
        <SobreMim/>
     </section>
      
  );
}

export default App;
