import {useState, useContext} from 'react'
import CartContext from '../../components/Cart/CartContext';
import Counter from './Counter';

const CounterContainer = ({id, category, titulo, descripcion, talle, material, precio, stockInicial, url}) => {

const {cart, setCart} = useContext(CartContext)


const [stock, setStock] = useState (stockInicial)

const products = {id, category, titulo, descripcion, talle, material, precio, stockInicial, url}

const onAdd = (q) => {
   if( q <= stock) {
    setCart([...cart, {products, quantity:q}])

    setStock(stock - q);
   } else if (stock <= 1) {
       setStock('Disculpe, stock insuficiente')
   }
};


/*
    const [stockActual, setStockActual] = useState(stockInicial)

    const restarStock = (e,nuevoStock) => {
        e.preventDefault();
        if(nuevoStock < stockActual) {
            setStockActual((stockActual) => stockActual - nuevoStock)
        } else {
           setStockActual('Disculpe, stock insuficiente')
        }
    }
*/
    return(
        <div>
            <Counter className="counter" init={1} stock={stock} onAdd={onAdd} cart={cart}></Counter>
        </div>
    )
}

export default CounterContainer;