import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import './Cart.css';
import Tarjetas from '../../Assets/Tarjetas.png'

const ItemCart = () => {

const {cart, clearAll, removeItem} = useContext(CartContext)

let total = 0

for (let i=0; i < cart.length; i++) {
    total = total + cart[i].item.precio * cart[i].quantity
}

let cant = 0

for (let i=0; i < cart.length; i++ ){
console.log(typeof (cart[i].quantity))
    cant = cant + cart[i].quantity
console.log(cant)
}

    return(
    <>
        <h3 className="cart-title">TU CARRITO</h3>
        <div className="total-container">
                <h5>RESUMEN DE COMPRA</h5>
                <div>
                    <b>{`${cant} PRODUCTOS`}</b>
                </div>
                <div>
                    <b>TOTAL: ${total}</b>
                </div>
                <div className="clean-button">
                    <button className="btn btn-danger btn-sm" onClick={() => clearAll()}>VACIAR CARRITO</button>
                </div>
                <div>
                    <img className="payment" src={Tarjetas} alt=""></img>
                </div>
                <div>
                    <NavLink to="/information">
                        <button className="btn btn-dark btn-sm">FINALIZAR COMPRA</button>
                    </NavLink>
                </div>
        </div>

            <div>
          {
            cart.length === 0 ?
                <div className="no-product">
                    <p>No hay productos elegidos</p>
                    <NavLink to="/">
                        <button className="btn btn-dark btn-sm">VOLVER</button>
                    </NavLink>
                </div> :
            cart.map((obj) => {
                return(
                <div className="cart-list">
                    <div className="product-list_container">
                        <img className="product-list_img" src={obj.item.url} alt=""></img>
                    </div>
                    <ul className="product-list">
                        <li className="product-list_title">{obj.item.titulo}</li>
                        <li>{`Cantidad: ${obj.quantity}`}</li>
                        <li>{`Precio: $${obj.item.precio * obj.quantity}`}</li>
                    </ul>
                    <div className="delete-item">
                        <button className="btn-close btn-sm" onClick={() => removeItem(obj.item.id)}>X</button>
                    </div>
                </div>
                )
            })
            }
            </div>
    </>

    )
}

export default ItemCart;
