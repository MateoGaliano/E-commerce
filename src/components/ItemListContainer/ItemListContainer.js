import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemInfo from '../../ItemInfo.json';
import ItemList from '../ItemListContainer/ItemList';
import './ItemListContainer.css'

function ItemListContainer() {

  const [items, setItems] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {
  
    new Promise((resolve, reject) => {
  
      setTimeout(() => {
        if (categoryId) {
          resolve(ItemInfo.filter( producto =>producto.category === categoryId ))
        } else {
          resolve(ItemInfo)
        }
      },2000);
  
    }).then((resultado) => setItems(resultado));
  },[categoryId]);
  
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

    return (

      <div className="container">
        <ItemList items={items}></ItemList>
      </div>
    
    );
  }
  
  export default ItemListContainer;