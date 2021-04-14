import CartContext from './CartContext';
import {useState} from 'react';

const CartProvider = ({defaultValue = [], children}) => {

    const [cart, setCart] = useState(defaultValue);
    console.log(cart)

    //MUESTRO PRODUCTO AGREGADO
    const addItem = (item, quantity) => {
        setCart([...cart, {item, quantity}])
    }

    const removeItem = (itemId) => {
        setCart( cart.filter( c => c.item.id !== itemId))
    }

    //VACIO TOTALIDAD DE PRODUCTOS AGREGADOS
    const clearAll = () => {
      setCart(defaultValue) //Vuelvo el estado a un array vacío y asigno la funcion a un button en CartWidget
    }

    const isInCart = (id) => {
        const auxProduct = cart.find( c => c.item.id === id)
        if(auxProduct) {
            return true;
        } else {
            return false
        }
    }


    return(
        <>
        <CartContext.Provider value={{cart, addItem, clearAll, removeItem, isInCart}}>
            {children}
        </CartContext.Provider>
        </>
    )
}

export default CartProvider;