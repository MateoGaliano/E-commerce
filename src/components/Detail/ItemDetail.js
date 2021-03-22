import {useState} from 'react';
import Counter from '../ItemListContainer/Counter';
import collar1 from '../../Assets/collar1.png'
import './ItemDetail.css'

const ItemDetail = (props) => {

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
        
        <div className="detail-counter">
            <div className="detail-img">
                <img className="detail-img_collar" src={collar1}></img>
            </div>
            <ul>
                <li>N° Producto:{props.detail.id}</li>
                <li>{props.detail.titulo}</li>
                <li>{props.detail.descripcion}</li>
                <li>Talle: {props.detail.talle}</li>
                <li>Material: {props.detail.material}</li>
                <li>Precio: ${props.detail.precio}</li>
            </ul>

            <Counter className="counter" init={1} stock={stockActual} onAdd={restarStock}></Counter>

        </div>
    
    )
}

export default ItemDetail;