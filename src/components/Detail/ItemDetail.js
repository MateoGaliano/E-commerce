import {useState} from 'react';
import Counter from '../ItemListContainer/Counter';
import collar1 from '../../Assets/collar1.png'
import './ItemDetail.css'

const ItemDetail = ({detail}) => {

const [stockActual, setStockActual] = useState(10)

    const restarStock = (e,nuevoStock) => {
        e.preventDefault();
        if(nuevoStock <= stockActual) {
            setStockActual((stockActual) => stockActual - nuevoStock)
        } else {
            alert('Stock insuficiente')
        }
    }


//funcion para activar counter


    return(
        <div className="detail-counter">
            <div className="detail-img">
                <img className="detail-img_collar" src={collar1}></img>
            </div>
            <ul className="detail-list">
                <li>N° Producto:{detail.id}</li>
                <li>{detail.titulo}</li>
                <li>{detail.descripcion}</li>
                <li>Talle: {detail.talle}</li>
                <li>Material: {detail.material}</li>
                <li>Precio: ${detail.precio}</li>
            </ul>

            <Counter className="counter" init={1} stock={stockActual} onAdd={restarStock}></Counter>

        </div>
    
    )
}

export default ItemDetail;