import {useState} from 'react';
import {Link} from 'react-router-dom';
import Counter from './Counter';
import collar1 from '../../Assets/collar1.png';
import './Item.css';

const Item = (props) => {

    const [stockActual, setStockActual] = useState(10)

    const restarStock = (e,nuevoStock) => {
        e.preventDefault();
        if(nuevoStock <= stockActual) {
            setStockActual((stockActual) => stockActual - nuevoStock)
        } else {
            alert('Stock insuficiente')
        }
    }

    return(
      <>
        <div className="card-container">
        <Link to={`/item/${props.id}`}>
          
            <div className="img-container">
              <img className="img-collar" src={collar1}></img>
            </div>

            <ul className="list">
              <li>N° Producto:{props.id}</li>
              <li>{props.titulo}</li>
            </ul>
          
        </Link>
        <Counter className="counter" init={1} stock={stockActual} onAdd={restarStock}></Counter>
        </div>
       
      </>
      
    )
}

export default Item;
