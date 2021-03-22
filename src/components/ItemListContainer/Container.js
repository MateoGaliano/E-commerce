import {useState, useEffect} from 'react';
import ItemListContainer from './ItemListContainer';
import ItemInfo from '../../ItemInfo.json';
import {Link} from 'react-router-dom';

function Container() {

const [items, setItems] = useState([])

useEffect(() => {

  new Promise((todoBien, todoMal) => {

    setTimeout(() => {
      todoBien(ItemInfo);
    },2000);

  }).then((resultado) => setItems(resultado));
});

const cambiarDatos = () => {

  new Promise((todoBien, todoMal) => {

    setTimeout(() => {
      todoBien(["02", "Collar rojo","$100", "collar1"]);
    },2000);

  }).then((cambio) => setItems(cambio));
};

  return(
    <div className='App'>
      <button onClick={cambiarDatos}>Cambiar Lista</button>
      <ItemListContainer items={items}></ItemListContainer>
    </div>
  )
};

export default Container;
