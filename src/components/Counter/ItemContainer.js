import Counter from './Counter';
import {useState} from 'react';


const ItemContainer = () => {

const [stockAtcual, setStockActual] = useState(10)

const restarStock = (e,nuevoStock) => {
    e.preventDefault();
    if(nuevoStock < stockAtcual) {
        setStockActual((stockAtcual) => stockAtcual - nuevoStock)
    } else {
        alert('Stock insuficiente')
    }
}

return(
    <>
        <p>Contador</p>
        <Counter init={1} stock={stockAtcual} onAdd={restarStock}></Counter>
    </>
    )
};


export default ItemContainer;