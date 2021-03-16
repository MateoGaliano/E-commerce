import collar1 from '../../Assets/Portada.png';
import '../../Estilos/ItemCount.css';


import {useState} from 'react';

const Counter = ({init, stock, onAdd}) => {

  const [counter,setCounter] = useState(init)

  const handelUp = () => {
    if(counter < stock) {
      setCounter(counter + 1)
    }
  };

  const handleDown = () => {
    if(counter > 1 ) {
      setCounter(counter - 1)
    }
  };

  const handleChange = (e) => {
    setCounter(e.target.value)
  };

  return(
    <div className="container">
        <div id="div1">
            <img src={collar1} alt="collar1"></img>
            <p>Stock:{stock}</p>
            <form>
              <input placeholder={init} value={counter} onChange={handleChange}></input>
              <button onClick={(e) => onAdd(e, counter)}>Agregar</button>
            </form>
            <button onClick={handelUp} >+1</button>
            <button onClick={handleDown} >-1</button>
        </div>
    </div>
  )
};

export default Counter;