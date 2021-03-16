
import {useState, useEffect} from 'react';
import ItemListContainer from './ItemListContainer';

function Container() {

const [items, setItems] = useState([])

useEffect(() => {

  new Promise((todoBien, todoMal) => {

    setTimeout(() => {
      todoBien(["manzana", "pera","banana"]);
    },2000);

  }).then((resultado) => setItems(resultado));
});

const cambiarDatos = () => {

  new Promise((todoBien, todoMal) => {

    setTimeout(() => {
      todoBien(["taza", "tenedor","plato"]);
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
