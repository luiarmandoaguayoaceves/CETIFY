import { useState } from 'react';
import './App.css';
import ContenedorPrincipal from './componentes/contenedorPrincipal';
import SobreFestival from './componentes/sobreFestival';
import Header from './componentes/header';
import LineUp from './componentes/lineUp';
import Escenario from './componentes/escenario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <ContenedorPrincipal />
      <SobreFestival />
      <LineUp 
        dia = 'Viernes 21'
        genero = 'Rock'
      />
      <Escenario/>
      <LineUp
        dia = 'Viernes 21'
        genero = 'Rock'
      />
      
    </div>
  )
}

export default App
