import {useState} from 'react';
import {Link} from 'react-router-dom';
import Counter from './Counter';
import './Item.css';

const Item = (props) => {

    const [stockActual, setStockActual] = useState(props.stock)

    const restarStock = (e,nuevoStock) => {
        e.preventDefault();
        if(nuevoStock < stockActual) {
            setStockActual((stockActual) => stockActual - nuevoStock)
        } else {
           setStockActual('Disculpe, stock insuficiente')
        }
    }

    const [cart,setCart] = useState([])

    const addToCart = (stockActual) => {
      console.log('agregar unidades')
      setCart([...cart,stockActual])
    };

    return( 
      <>
        <div className="card-container">
            <div className="img-container">
              <img className="img-collar" src={props.url}></img>
            </div>

            <ul className="list">
              <li>Código de Producto: #{props.id}</li>
              <li>{props.titulo}</li>
            </ul>
            <Link to={`/item/${props.id}`}>
              <button className="detail-button" >Ver detalle</button>
            </Link>
        <Counter className="counter" init={1} stock={stockActual} onAdd={restarStock} cart={addToCart}></Counter>
        </div>
       
      </>
      
    )
}

export default Item;
