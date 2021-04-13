import {getFirestore} from './configs/Firebase';
import {useEffect, useState} from 'react';
import RouterApp from './Routers/RouterApp';
import './App.css';
import CartProvider from './Context/CartProvider';
import Inicio from './components/Inicio/Inicio';

function App() {

  useEffect(() => {
    const db = getFirestore();
    const categoriasCollection = db.collection('categorias')

    categoriasCollection.get().then((resp) => {
      if(resp.size === 0) {
        console.log('Sin datos')
      }
      resp.docs.map((c) => console.log({id: c.id, ...c.data()}));
    }).catch((error) => console.log(error))

  },[]);

  const [isLoad, setIsLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false)
      },2000);
  },[]);

  return (
    <div className="App">
      { isLoad ? <Inicio></Inicio> :
      <CartProvider>
        <RouterApp></RouterApp>
      </CartProvider>
      }
    </div>
  );
};

export default App;

