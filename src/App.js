import {useState} from 'react';
import RouterApp from './Routers/RouterApp';
import './App.css';
import CartContext from './components/Cart/CartContext';

function App() {

  const [cart, setCart] = useState([]);
  console.log(cart)

  return (
    <div className="App">
      <CartContext.Provider value={{cart, setCart}}>
        <RouterApp></RouterApp>
      </CartContext.Provider>
      
    </div>
  );
};

export default App;

