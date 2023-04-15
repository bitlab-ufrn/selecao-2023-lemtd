import { useState } from 'react';
import '../style/Field.css';
import Popup from './Popup';
const data = require('../data/offensesSet');

const Field = propsField => {    
    // const handleInput = (e) => {
    //   // Guardando toda modificação feita no input
    //   setValueInput(e.target.value);
    // };
    
    const handleSubmit = (e) => {
        // Evita submissão via GET
        e.preventDefault();
    };
    
    const[comentContent, setComentContent] = useState(''); // Comentário atual
    const[containsOffense, setContains] = useState(false); // Bool se contém ofensa
    
    async function checkText() {
        setContains(false);
        var textAreaToCheckUpper = document.getElementById('message').value.toUpperCase(); // Upper case para ajudar a avaliar o conteudo da mensagem
        var textArea = document.getElementById('message').value; // Guardar mensagem original
    
        for(let index = 0; index < data['offensesSet'].length; index++) {
            var element = data['offensesSet'][index].toUpperCase(); // Upper case para ajudar a avaliar o conteudo da mensagem
            if (textAreaToCheckUpper.includes(element)){ // Análise do conteúdo da mensagem
                setContains(true);
                textArea = "Este comentário contém ofensa. Não foi possível adicioná-lo."
                break;
            }
        }

        // Armazenar mensagem com conteúdo não ofensivo
        if(!containsOffense && textArea != "Este comentário contém ofensa. Não foi possível adicioná-lo." && textArea != "" && textArea != " ") {
            propsField.add(textArea);
            console.log(">>>>> ", propsField.coments)
        }

        // Seta valor com o resultado da análise
        setComentContent(textArea);

        // Exibe popup
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
                <textarea id="message" name="messageContent" placeholder='Insira sua mensagem'
                // onChange={handleInput} value={valueInput}
                />
                <button id='send' type='submit' onClick={checkText}>Enviar</button>
            </form>
            {popup? <Popup
                        contains={containsOffense}
                        closeIt={hidePopup}
                        content={comentContent}/>
                    : ""}
        </div>
    )
}

export default Field