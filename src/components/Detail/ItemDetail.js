import CounterContainer from '../Counter/CounterContainer';
import './ItemDetail.css';

const ItemDetail = ({detail}) => {

    return(
        <div className="detail-counter">
            <div className="detail-img">
                <img className="detail-img_collar" src={detail.url}></img>
            </div>
            <ul className="detail-list">
                <li>Código de Producto: #{detail.id}</li>
                <li>{detail.titulo}</li>
                <li>{detail.descripcion}</li>
                <li>Talle: {detail.talle}</li>
                <li>Material: {detail.material}</li>
                <li>Precio: ${detail.precio}</li>
            </ul>

         <div className="counter">
         <CounterContainer
          id={detail.id}
          category={detail.category}
          titulo={detail.titulo}
          descripcion={detail.descripcion}
          talle={detail.talle}
          material={detail.material}
          precio={detail.precio}
          stockInicial={detail.stock}
          url={detail.url}
          />
            </div>
        </div>
    )
}

export default ItemDetail;