import {useState, useContext} from 'react';
import CartContext from '../../Context/CartContext';
import Counter from './Counter';

const CounterContainer = ({id, categoria, titulo, descripcion, talle, material, peso, precio, stockInicial, url, detailUrl}) => {

const {addItem} = useContext(CartContext)

const [stock, setStock] = useState (stockInicial)
const products = {id, categoria, titulo, descripcion, talle, material, precio, peso, stockInicial, url, detailUrl}

const onAdd = (quantity) => {
   if( quantity <= stock) {
    addItem(products, quantity)

    setStock(stock - quantity);
   } else {
       setStock('Disculpe, stock insuficiente')
   }
};

    return(
        <div>
            <Counter className="counter" init={1} stock={stock} onAdd={onAdd}></Counter>
        </div>
    )
}

export default CounterContainer;