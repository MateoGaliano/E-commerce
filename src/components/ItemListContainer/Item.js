import {Link} from 'react-router-dom';
import CounterContainer from './CounterContainer';
import './Item.css';

const Item = ({id, category, titulo, descripcion, talle, material, precio, stock, url}) => {

    return(
      <>
        <div className="card-container">
            <div className="img-container">
              <img className="img-collar" src={url}></img>
            </div>

            <ul className="list">
              <li>Código de Producto: #{id}</li>
              <li>{titulo}</li>
            </ul>
            <Link to={`/item/${id}`}>
              <button className="detail-button" >Ver detalle</button>
            </Link>
        <CounterContainer
          id={id}
          category={category}
          titulo={titulo}
          descripcion={descripcion}
          talle={talle}
          material={material}
          precio={precio}
          stockInicial={stock}
          url={url}
          />
        </div>
      </>
    )
}

export default Item;
