import '../style/Field.css';
import Coment from './Coment';
// import { addComent } from './Coment';
const data = require('../data/ofensasSet');

// Hooks
// const [valueInput, setValueInput] = useState('');

// const handleInput = (e) => {
//   // Guardando toda modificação feita no input
//   setValueInput(e.target.value);
// };

const handleSubmit = (e) => {
    // Evita submissão via GET
    e.preventDefault();

    // Recebendo os dados via submit
    // const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData);
};

async function analisarTexto() {
    var contem = false;
    var textAreaUpper = document.getElementById('messagem').value.toUpperCase();
    var textArea = document.getElementById('messagem').value;

    for(let index = 0; index < data['ofensasSet'].length; index++) {
        var elemento = data['ofensasSet'][index].toUpperCase();
        if (textAreaUpper.includes(elemento)){
            console.log('enotrou:::::::: ', elemento);
            contem = true;
            break;
        }
    }
}

const Field = () => {
    return (        
        <form onSubmit={handleSubmit}>
            <textarea id="messagem" name="conteudo" placeholder='Insira sua mensagem'
            // onChange={handleInput} value={valueInput}
            />
            <button id='enviar' type='submit' onClick={analisarTexto}>Enviar</button>
        </form>
    )
}

export default Field