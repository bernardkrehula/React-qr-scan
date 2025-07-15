
const singleButton = ({onClick, vartiation, child}) => {

    return(
        <button className={`btn ${vartiation}`} onClick={onClick}>{child}</button>
    )
}

export default singleButton