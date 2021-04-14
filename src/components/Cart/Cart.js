import { useContext } from "react"
import { NavLink } from "react-router-dom"
import CartContext from "../../Context/CartContext"
import './Cart.css'

const ItemCart = () => {

    const {cart, clearAll, removeItem} = useContext(CartContext)
  
    let total = 0

for (let i=0; i < cart.length; i++) {
    total = total + cart[i].item.precio * cart[i].quantity
}

    return(
        <>
          {
            cart.length === 0 ?
            
                <div className="no-product">
                    <p>No hay productos elegidos</p>
                    <NavLink to="/">
                        <button>VOLVER A LA CATEGORIA</button>
                    </NavLink>
                </div> :
            
            cart.map((obj) => {
                return(
                <div className="cart-list">
                    <ul className="product-list">
                        <li>{obj.item.titulo}</li>
                        <li>{obj.quantity}</li>
                        <li>{`${obj.item.precio * obj.quantity}`}</li>
                    </ul>
                    <div>
                        <button className="delete-button" onClick={() => removeItem(obj.item.id)}>BORRAR ITEM</button>
                    </div>
                </div>
                )
            })
            }
            <div className="total-container">
                <div>
                    TOTAL: ${total}
                </div>
                <div className="clean-button">
                    <button onClick={() => clearAll()}>VACIAR CARRITO</button>
                </div>
                <div>
                    <NavLink to="/checkout">
                        <button className="pay-button">PAGAR</button>
                    </NavLink>
                    
                </div>
            </div>
        </>

    )
}

export default ItemCart;
