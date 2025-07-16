import './Btn.css'

const SingleButton = ({onClick, vartiation, children}) => {

    return(
        <button className={`btn ${vartiation}`} onClick={onClick}>{children}</button>
    )
}

export default SingleButton;