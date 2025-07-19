import './Btn.css'
//Stilizovati disabled btn preko disabled atributa
//Ono sto kontrolise moze li btn da se klikne ili ne je disabled atribut
//Maknuti varijacije jer su nepotrebne
const SingleButton = ({onClick, vartiation, color, children}) => {

    return(
        <button className={`btn ${vartiation} ${color}`} onClick={onClick}>{children}</button>
    )
}

export default SingleButton;