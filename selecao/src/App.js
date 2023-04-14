import { useState } from 'react';
import './style/App.css';
import Welcome from './components/Header';
import Field from './components/Field';
import Coment from './components/Coment';

const App = () => {
  const [coments, setComents] = useState([]);

  async function addComents(coment) {
    setComents([...coments, coment])
  }

  return (
    <main className='App'>
      <Welcome />
      <Field add={addComents} coments={coments} />
      <Coment coments={coments} />
    </main>
  );
}

export default App;
