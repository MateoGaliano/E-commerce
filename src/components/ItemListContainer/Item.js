import {Link} from 'react-router-dom';
import CounterContainer from '../Counter/CounterContainer';
import './Item.css'


const Item = (props) => {


    return(
      <>
        <div className="card-container">
            <div className="img-container">
              <img src={props.url} alt=""></img>
            </div>
            <ul className="list">
              <li>{props.titulo}</li>
              <li>${props.precio}</li>
            </ul>
            <Link to={`/item/${props.id}`}>
              <button type="button" id="detail-button" className="btn btn-dark btn-sm">Detalle</button>
            </Link>
            <div className="counter-container">
              <CounterContainer
              id={props.id}
              categoria={props.categoria}
              titulo={props.titulo}
              descripcion={props.descripcion}
              talle={props.talle}
              material={props.material}
              precio={props.precio}
              stockInicial={props.stock}
              url={props.url}
              />
            </div>
        </div>
      </>
    )
}

export default Item;
