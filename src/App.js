import {useEffect, useState} from 'react';
import RouterApp from './Routers/RouterApp';
import './App.css';
import CartProvider from './Context/CartProvider';
import Inicio from './components/Inicio/Inicio';

function App() {


  const [isLoad, setIsLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false)
      },1500);
  },[]);


  return (
    <div className="app">
      { isLoad ? <Inicio></Inicio> :
      <CartProvider>
        <RouterApp></RouterApp>
      </CartProvider>
      }
    </div>
  );
};

export default App;

