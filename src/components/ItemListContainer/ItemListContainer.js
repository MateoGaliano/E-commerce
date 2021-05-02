import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {findByCategoria} from '../Firebase/FirebaseComponent';
import ItemList from '../ItemListContainer/ItemList';
import './ItemListContainer.css'

function ItemListContainer() {

  const [items, setItems] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {

    new Promise((resolve, reject) => {

      findByCategoria(categoryId).then(v => {
         resolve(v)
         })

    }).then((resultado) => setItems(resultado));
  },[categoryId]);

    return (

      <div className="container">
        <h4>CATEGORIA</h4>
        <ItemList items={items}></ItemList>
      </div>
    );
  }

  export default ItemListContainer





    /*
const cambiarDatos = () => {

  new Promise((todoBien, todoMal) => {

    setTimeout(() => {
      todoBien(["02", "Collar rojo","$100", "collar1"]);
    },2000);

  }).then((cambio) => setItems(cambio));
};

HTML ---->   <button onClick={cambiarDatos}>Cambiar Lista</button>
*/
