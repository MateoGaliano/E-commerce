import {useState, useContext} from 'react';
import {getFirestore} from '../../configs/Firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import CartContext from '../../Context/CartContext';
import './Information.css'


const Information = () => {

    const {cart} = useContext(CartContext)

    const [buyer, setBuyer] = useState({
      name: "",
      apellido: "",
      email: "",
      phone: "",
      adress: "",
      city: "",
      postcode: ""
    })

    const order= {buyer, items: cart, createOn: firebase.firestore.Timestamp.fromDate(new Date()), total:2000}

    const [lastId ,setLastId] = useState()
    const [db, setDb] = useState(getFirestore())

    const create = (e) => {
      e.preventDefault()
      const orders = db.collection("orders");

      return orders.add(order).then((resp) => {
          return setLastId(resp.id);
        });
      };

      const handleInputChange = (e) => {
        setBuyer({
          ...buyer,
          [e.target.name]: e.target.value
        });
      };

    return(
        <>
            <div>
                <h5  className="delivery-title">DATOS DE ENTREGA</h5>
                <form className="client-form">
                    <input type="text" name="name" placeholder="Nombre" required onChange={handleInputChange}/>
                    <input type="text" name="apellido" placeholder="Apellido" required onChange={handleInputChange}/>
                    <input type="email" name="email" placeholder="Mail" minLength="5" maxLength="30" required onChange={handleInputChange}/>
                    <input type="email" name="email" placeholder="Confirmar mail" minLength="5" maxLength="30" required onChange={handleInputChange}/>
                    <input type="number" name="phone" placeholder="Número de teléfono" required onChange={handleInputChange}/>
                    <input type="text" name="adress" placeholder="Dirección" required onChange={handleInputChange}/>
                    <input type="text" name="city" placeholder="Ciudad" required onChange={handleInputChange}/>
                    <input type="number" name="postcode" placeholder="Código Postal" required onChange={handleInputChange}/>
                    { lastId ?
                    <p>{`Tu número de orden es: #${lastId}`}</p>
                   : "" }
                    <button className="btn btn-dark btn-sm" onClick={create}>CONTINUAR</button>
                </form>
            </div>
        </>
    )
}

export default Information;