import { useState } from 'react';
import '../style/Field.css';
import Coment from './Coment';
import Popup from './Popup';
// import { addComent } from './Coment';
const data = require('../data/offensesSet');

const Field = propsField => {    
    // const handleInput = (e) => {
    //   // Guardando toda modificação feita no input
    //   setValueInput(e.target.value);
    // };
    
    const handleSubmit = (e) => {
        // Evita submissão via GET
        e.preventDefault();
    
        // Recebendo os dados via submit
    };
    
    const[content, setContent] = useState(''); //Comentário atual
    const[containsOffense, setContains] = useState(false); //Bool se contém ofensa
    
    async function checkText() {
        setContains(false);
        var textAreaToCheckUpper = document.getElementById('messagem').value.toUpperCase();
        var textArea = document.getElementById('messagem').value;
    
        for(let index = 0; index < data['offensesSet'].length; index++) {
            var element = data['offensesSet'][index].toUpperCase();
            if (textAreaToCheckUpper.includes(element)){
                setContains(true);
                textArea = "Este comentário contém ofensa. Não foi possível adicioná-lo."
                break;
            }
        }

        if(!containsOffense && textArea != "Este comentário contém ofensa. Não foi possível adicioná-lo." && textArea != "" && textArea != " ") {
            propsField.add(textArea);
            console.log(">>>>> ", propsField.coments)
        }

        setContent(textArea);
        showPopUp();
    }
    
    const[popup, setPopup] = useState(false); //Hide/Show popup
    
    async function showPopUp() {
        setPopup(!popup);
    }

    function hidePopup() {
        setPopup(false);
    }

    return (   
        <div className='field'>
            <form onSubmit={handleSubmit}>
                <textarea id="messagem" name="conteudo" placeholder='Insira sua mensagem'
                // onChange={handleInput} value={valueInput}
                />
                <button id='enviar' type='submit' onClick={checkText}>Enviar</button>
            </form>
            {popup? <Popup
                        contains={containsOffense}
                        closeIt={hidePopup}
                        content={content}/>
                    : ""}
        </div>
    )
}

export default Field