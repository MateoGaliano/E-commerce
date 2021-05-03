import { useContext, useState } from "react";
import {NavLink} from "react-router-dom";
import CartContext from '../../Context/CartContext';
import './CartWidget.css';

const CartWidget = () => {

const {cart, clearAll, removeItem} = useContext(CartContext)

const [active, setActive] = useState(false)

const handleClick = () => {
    setActive(!active)
}

let cant = 0

for (let i=0; i < cart.length; i++ ) {
    cant = cant + cart[i].quantity
}
    return(
        <>
            <div className="cart-widget_dropdown" onClick={handleClick}>
                { cant === 0 ? '' :
                <p className="cart-length">{cant}</p>}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
            </div>
            <div className={`cart-widget__items-container ${active ? 'active' : ''}`}>
                <div className="cart-widget_items">
                    <h5 className="cart-widget_title">PRODUCTOS ELEGIDOS</h5>
                    {cart.length === 0 ?
                    <li className="empty-cart">No hay productos agregados</li> :
                    cart.map((obj) => {  //si hago un map con llaves tengo que poner si o si return
                        
                        return(
                            <ul key={obj.id} className="item-list">
                                <li className="title">{obj.item.titulo}</li>
                                <li>{obj.quantity}</li>
                                <button type="button" className="btn btn-danger btn-sm" aria-label="Delete" onClick={() => removeItem(obj.item.id)}>X</button>
                            </ul>
                        )
                    })
                }
                </div>

                <div className="buttons">
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => clearAll()}>Vaciar carrito</button>
                    <NavLink to="/cart">
                        <button type="button" className="btn btn-dark btn-sm">Ir al carrito</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default CartWidget;