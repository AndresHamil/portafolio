import PropTypes from 'prop-types';


export function Button({tittle}){

    function hola(){
        alert("Hola")
    }
    
    return (
        <button onClick={hola}>
            {tittle}
        </button>
    )
}




Button.propTypes = {
    tittle: PropTypes.string.isRequired
}

Button.defaultProps = {
    tittle: 'Boton'
}
