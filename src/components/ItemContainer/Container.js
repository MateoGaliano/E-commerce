import {useState, useEffect, Component} from 'react';
import ItemListContainer from './ItemListContainer';

function Container() {

const [items, setItems] = useState([])

useEffect(() => {

  new Promise((todoBien, todoMal) => {

    setTimeout(() => {
      todoBien([{imgUrl:"/Assets/collar1.png", id:1, titulo: 'collar rojo', precio: 100},{imgUrl:"/Assets/collar1.png", id:2, titulo: 'collar verde', precio: 200},{imgUrl:"/Assets/collar1.png", id:3, titulo:'collar amarillo', precio: 300},{imgUrl:"/Assets/collar1.png", id:4, titulo:'collar azul', precio: 400}]);
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
