import React from 'react';
import "../Estilos/ItemListContainer.css";


const ItemListContainer = (props) => (
    <>
        {console.log(props)}
        <h5 className="items">{props?.greeting} {props.children}</h5>
    </>
)

export default ItemListContainer;