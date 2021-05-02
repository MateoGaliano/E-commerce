import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../../Context/CartContext';
import './Counter.css';

const Counter = ({init, stock, onAdd}) => {

const [counter,setCounter] = useState(init)

const {cart} = useContext(CartContext)

/*
const handleUp = () => {
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
  setCounter(Number(e.target.value))
};

    return(
        <>
          <div className="counter-container">

            <p className="stock">Stock: {stock}</p>

            <div className="input-button">
              <input className="quantity" type="number" min="0" max="10" placeholder={init} value={counter} onChange={handleChange}></input>
            </div>

            <button id  ="add" className="btn btn-dark btn-sm" onClick={e => onAdd(counter)} disabled={stock < 1}>Agregar unidades</button>
            { cart.length > 0 &&
              <Link to="/cart">
                <button id="go-to-cart" className="btn btn-dark btn-sm">Ir al carrito</button>
              </Link>
            }
           </div>
        </>
    )
}

export default Counter;