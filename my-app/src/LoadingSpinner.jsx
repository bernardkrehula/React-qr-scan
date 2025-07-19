import './LoadingSpinner.css'
const Spinner = ({variation}) => {

    return(
        <img className={variation} src="./Spinner@1x-1.0s-200px-200px.gif" alt="Loading..." />
    )
}

export default Spinner;