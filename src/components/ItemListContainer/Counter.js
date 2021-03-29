import {useState} from 'react';
import {Link} from 'react-router-dom';
import './Counter.css';

const Counter = ({init, stock, onAdd}) => {

const [counter,setCounter] = useState(init)

const handelUp = () => {
  if(counter < stock) {
    setCounter(counter + 1)
  }
};

const handleDown = () => {
  if(counter > 1 ) {
    setCounter(counter - 1)
  }
};

const handleChange = (e) => {
  setCounter(e.target.value)
};


const [botonFinalizar, setBotonFinalizar] = useState(false)

const [productoAgregado, setProdcutoAgregado] = useState ()

const handleproductosAgregados = (e) => {
console.log()
}

    return(
        <>
          <div className="counter-container">

            <p>Stock: {stock}</p>

            <div className="input-button">
              <input className="cantidad" type="number" placeholder={init} value={counter} onChange={handleChange}></input>
              <button id="suma" onClick={handelUp} >+1</button>
              <button id="resta" onClick={handleDown} >-1</button>
            </div>

            <button className="agregar" onClick={(e) => onAdd(e, counter)}>Agregar</button>
            <Link to="/cart">
              <button className="terminar" disabled={!botonFinalizar} onChange={handleproductosAgregados}>Finalizar compra</button>
            </Link>
          </div>
        </>
    )
}

export default Counter;