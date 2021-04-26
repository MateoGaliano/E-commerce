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

    const [db, setDb] = useState(getFirestore())
    const [lastId ,setLastId] = useState()
    function create(e) {
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
            <div>Información personal
                <form className="client-form">
                    <input type="text" name="name" placeholder="Nombre" onChange={handleInputChange}/>
                    <input type="text" name="apellido" placeholder="Apellido" onChange={handleInputChange}/>
                    <input type="text" name="email" placeholder="Mail" onChange={handleInputChange}/>
                    <input type="text" name="phone" placeholder="Número de teléfono" onChange={handleInputChange}/>
                    <input type="text" name="adress" placeholder="Dirección" onChange={handleInputChange}/>
                    <input type="text" name="city" placeholder="Ciudad" onChange={handleInputChange}/>
                    <input type="text" name="postcode" placeholder="Código Postal" onChange={handleInputChange}/>
                    { lastId ? 
                    <p>{`Tu número de orden es: #${lastId}`}</p>
                   : "" }
                    <button onClick={create}>Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Information;