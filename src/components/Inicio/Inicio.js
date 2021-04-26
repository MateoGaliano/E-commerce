import Woodyicon from '../../Assets/Woodyicon.jpg';
import './Inicio.css'

const Inicio = () => {
    return(
        <>
            <img src={Woodyicon} className="inicio" className="animate__animated animate__pulse"></img>
            <h2>Bienvenidos!</h2>
        </>
    )
}

export default Inicio;