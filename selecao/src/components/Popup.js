import '../style/Popup.css';

const Popup = props => {
    return (
        <div>
            <div className='popup-main'>
                <div className="popup">
                    <div className='popup-header' >
                        <h1>Resultado</h1>
                        <h1 className='closepopup' onClick={props.closeIt}>x</h1>
                    </div>
                    <div className='popup-content'>
                        <h4>{
                        props.content == '' || props.content == ' ' ?
                        'Não há comentário a ser adicionado' :
                        props.contains ?
                        "AVISO: Seu comentário contém ofensa. Não foi possível adicioná-lo." :
                        "COMENTÁRIO ADICIONADO: " + props.content }</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup