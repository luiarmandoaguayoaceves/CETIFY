import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ContenedorPrincipal from './componentes/contenedorPrincipal';
import SobreFestival from './componentes/sobreFestival';
import Header from './componentes/header';
import LineUp from './componentes/lineUp';
import Galeria from './componentes/galeria';
import Boletos from './componentes/boletos';
import Footer from './componentes/footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <ContenedorPrincipal />
      <SobreFestival />
      <LineUp
        dia='Viernes 21'
        genero='Rock'
      />
      <Galeria />
      <Boletos />
      <Footer />

    </div>
  )
}

export default App
