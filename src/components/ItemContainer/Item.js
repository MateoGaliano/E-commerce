import {useState} from 'react';
import Counter from './Counter';
import '../../Estilos/Item.css'

const Item = (props) => {


    const [stockAtcual, setStockActual] = useState(10)

    const restarStock = (e,nuevoStock) => {
        e.preventDefault();
        if(nuevoStock <= stockAtcual) {
            setStockActual((stockAtcual) => stockAtcual - nuevoStock)
        } else {
            alert('Stock insuficiente')
        }
    }

    return(
        
          <div className="div-counter">
            <div className="img-counter">
              <img className="img-counter_collar" src={props.imgUrl}></img>
            </div>
            
            <div>
              <li>N° Prodcuto:{props.id}</li>
              <li>{props.titulo}</li>
              <li>Precio: {props.precio}</li>
            </div>

            <Counter className="counter" init={1} stock={stockAtcual} onAdd={restarStock}></Counter>
          </div>
        
    )
}

export default Item;