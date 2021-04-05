import {useState} from 'react';
import CounterContainer from '../ItemListContainer/CounterContainer';
import './ItemDetail.css';

const ItemDetail = (props) => {

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
            <CounterContainer
                id={props.detail.id}
                category={props.detail.category}
                titulo={props.detail.titulo}
                descripcion={props.detail.descripcion}
                talle={props.detail.talle}
                 material={props.detail.material}
                precio={props.detail.precio}
                stockInicial={props.detail.stock}
                url={props.detail.url}
          />
            </div>
        </div>
    )
}

export default ItemDetail;