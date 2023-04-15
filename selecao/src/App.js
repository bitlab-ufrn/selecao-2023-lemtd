import { useState } from 'react';
import './style/App.css';
import Header from './components/Header';
import Field from './components/Field';

const App = () => {
  const [coments, setComents] = useState([]);

  async function addComents(coment) {
    setComents([...coments, coment])
  }

  return (
    <div className='App'>
      <div className='div-main'>
        <Header />
        <Field add={addComents} coments={coments} />
      </div>
    </div>
  );
}

export default App;
