import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../Cart/CartContext';
import './Counter.css';

const Counter = ({init, stock, onAdd}) => {

const [counter,setCounter] = useState(init)

const {cart} = useContext(CartContext)

/*
const handelUp = () => {
  if(counter < stock) {
    setCounter(counter + 1)
  }
};

const handleDown = () => {
  if(counter > 1 ) {
    setCounter(counter - 1)
  }
};*/

const handleChange = (e) => {
  setCounter(e.target.value)
};

    return(
        <>
          <div className="counter-container">

            <p>Stock: {stock}</p>

            <div className="input-button">
              <input className="cantidad" type="number" min="0" max="10" placeholder={init} value={counter} onChange={handleChange}></input>
            </div>

            <button className="agregar" onClick={e => onAdd(counter)} disabled={stock = 0}>Agregar unidades</button>
            { cart.length > 0 &&
              <Link to="/cart">
                <button className="terminar">Ir al carrito</button>
              </Link>
            }

          </div>
        </>
    )
}

export default Counter;