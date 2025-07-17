import './Btn.css'

const SingleButton = ({onClick, vartiation, color, children}) => {

    return(
        <button className={`btn ${vartiation} ${color}`} onClick={onClick}>{children}</button>
    )
}

export default SingleButton;