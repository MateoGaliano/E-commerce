import { useContext } from "react"
import CartContext from "../../Context/CartContext"

const ItemCart = () => {

    const {cart, clearAll, removeItem} = useContext(CartContext)
    let total = 0

    for (let i=0; i < cart.lenght; i++) {
        total = total + cart[i].item.precio * cart[i].quantity
    }


    return(
        <>
          {
            cart.length === 0 ?
            <p>No hay productos elegidos</p> :

            cart.map((abc) => {
                return(
                <div>
                    <div>
                        <li>{abc.item.titulo}</li>
                        <li>{abc.quantity}</li>
                        <li>{`${abc.item.precio * abc.quantity}`}</li>
                     </div>
                     <div>
                        <button onClick={() => removeItem(abc.item.id)}>BORRAR ITEM</button>
                    </div>
                    <div>
                        <button onClick={() => clearAll()}>VACIAR CARRITO</button>
                    </div>
                    <div>
                        <button>PAGAR</button>
                    </div>
                </div>
                )
            })
        }
         <div>
                TOTAL: ${total}
            </div>   

        </>

    )
}

export default ItemCart;
