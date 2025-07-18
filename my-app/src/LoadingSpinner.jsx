
const Spinner = ({ size = 'medium' }) => {

    return(
        <img 
        src="./Spinner@1x-1.0s-200px-200px.gif" 
        alt="Loading..." 
        style={{ width: size, height: size }} 
    />
    )
}

export default Spinner;