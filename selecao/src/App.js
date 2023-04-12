import {useState} from 'react';
import './App.css';

function App() {
  // Hooks
  const [valueInput, setValueInput] = useState('');

  const handleInput = (e) => {
    // Guardando toda modificação feita no input
    setValueInput(e.target.value);

    console.log(">>> handleInput ", e.target.value);
  };

  const handleSubmit = (e) => {
    // Evita submissão via GET
    e.preventDefault();

    // Recebendo os dados via submit
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(">>> handleSubmit", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="conteudo" placeholder='Insira sua mensagem' onChange={handleInput} value={valueInput}>

      </input>
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default App;
