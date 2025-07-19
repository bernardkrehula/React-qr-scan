import './Btn.css'
//Stilizovati disabled btn preko disabled atributa
//Ono sto kontrolise moze li btn da se klikne ili ne je disabled atribut
//Maknuti varijacije jer su nepotrebne
const SingleButton = ({onClick, disabled, children}) => {

    return(
        <button className='btn' onClick={onClick} disabled={disabled}>{children}</button>
    )
}

export default SingleButton;