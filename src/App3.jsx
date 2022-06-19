import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './conciertos/headder';
import Video from './conciertos/video';
import Eventos from './conciertos/eventos';
import Albmnes from './conciertos/albumes';

function App3() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Video />
      <Eventos />
      <Albmnes />
    </div>
  )
}

export default App3
