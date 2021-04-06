import {Link} from 'react-router-dom';
import CounterContainer from './CounterContainer';
import './Item.css';

const Item = (props) => {

    return(
      <>
        <div className="card-container">
            <div className="img-container">
              <img className="img-collar" src={props.url}></img>
            </div>

            <ul className="list">
              <li>Código de Producto: #{props.id}</li>
              <li>{props.titulo}</li>
            </ul>
            <Link to={`/item/${props.id}`}>
              <button className="detail-button" >Ver detalle</button>
            </Link>
        <CounterContainer
          id={props.id}
          category={props.category}
          titulo={props.titulo}
          descripcion={props.descripcion}
          talle={props.talle}
          material={props.material}
          precio={props.precio}
          stockInicial={props.stock}
          url={props.url}
          />
        </div>
      </>
    )
}

export default Item;
