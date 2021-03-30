import {useState} from 'react';
import Counter from '../ItemListContainer/Counter';
import './ItemDetail.css'

const ItemDetail = (props) => {

const [stockActual, setStockActual] = useState(props.detail.stock)

    const restarStock = (e,nuevoStock) => {
        e.preventDefault();
        if(nuevoStock <= stockActual) {
            setStockActual((stockActual) => stockActual - nuevoStock)
        } else {
            setStockActual('Disculpe, stock insuficiente')
        }
    }

    return(
        <div className="detail-counter">
            <div className="detail-img">
                <img className="detail-img_collar" src={props.detail.url}></img>
            </div>
            <ul className="detail-list">
                <li>Código de Producto: #{props.detail.id}</li>
                <li>{props.detail.titulo}</li>
                <li>{props.detail.descripcion}</li>
                <li>Talle: {props.detail.talle}</li>
                <li>Material: {props.detail.material}</li>
                <li>Precio: ${props.detail.precio}</li>
            </ul>
            
            <div className="counter">
                <Counter init={1} stock={stockActual} onAdd={restarStock}></Counter>
            </div>
        </div>
    )
}

export default ItemDetail;