import { useContext, useState } from "react";
import {NavLink} from "react-router-dom";
import CartContext from '../../Context/CartContext';
import bagIcon from '../../Assets/bagIcon.png';
import './CartWidget.css';

const CartWidget = () => {

const {cart, clearAll, removeItem} = useContext(CartContext)

const [active, setActive] = useState(false)

const handleClick = () => {
    setActive(!active)
}

let cant = 0

for (let i=0; i < cart.length; i++ )
    cant = cant + cart[i].quantity
    return(
        <>
            
            <div className="cart-widget_dropdown" onClick={handleClick}>
                <h5 className="cart-length">{cant}</h5>
                <img src={bagIcon} className="cart-widget_icon"></img>
            </div>
            <div className={`cart-widget__items-container ${active ? 'active' : ''}`}>
                <ul>
                    {cart.length === 0 ?
                    <li>No hay productos agregados</li> :
                    cart.map((obj) => {  //si hago un map con llaves tengo que poner si o si return
                        return(
                            <ul>
                                <l1 className="title">{obj.item.titulo}</l1>
                                <li className="quantity">{obj.quantity}</li>
                                <button onClick={() => removeItem(obj.item.id)}>Eliminar item</button>
                            </ul>
                        )
                    })
                }
                </ul>

                <button onClick={() => clearAll()}>Vaciar carrito</button>
                <NavLink to="/cart">
                    <button>Finalizar compra</button>
                </NavLink>
            </div>
            
        </>
    )
}

export default CartWidget;