import {useState, useEffect} from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemInfo from '../../ItemInfo.json';

function Collares() {

const [items, setItems] = useState([])

useEffect(() => {

  new Promise((todoBien, todoMal) => {

    setTimeout(() => {
      todoBien(ItemInfo);
    },2000);

  }).then((resultado) => setItems(resultado));
});

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

  return(
    <div className='App'>
      <ItemListContainer items={items}></ItemListContainer>
    </div>
  )
};

export default Collares;
