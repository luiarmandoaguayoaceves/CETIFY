import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './musica/header';
import Video from './musica/video';


function App2() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Video/>
    </div>
  )
}

export default App2
