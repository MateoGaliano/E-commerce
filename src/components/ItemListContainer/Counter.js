import {useState} from 'react';
import {Link} from 'react-router-dom';
import './Counter.css';

const Counter = ({init, stock, onAdd}) => {

const [counter,setCounter] = useState(init)

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

const [cart,setCart] = useState([])

const addToCart = (stock) => {
  console.log('agrego unidades')
  setCart([...cart,stock])
};

    return(
        <>
          <div className="counter-container">

            <p>Stock: {stock}</p>

            <div className="input-button">
              <input className="cantidad" type="number" placeholder={init} value={counter} onChange={handleChange}></input>
            </div>

            <button className="agregar" onClick={(e) => onAdd(e, counter) || addToCart(stock)} disabled={stock < 0}>Agregar unidades</button>

            <Link to="/cart">
              <button className="terminar" disabled={cart.length < 1} >Ir al carrito</button>
            </Link>
            
          </div>
        </>
    )
}

export default Counter;