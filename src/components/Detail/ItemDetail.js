import CounterContainer from '../Counter/CounterContainer';
import './ItemDetail.css';

const ItemDetail = ({detail}) => {

    return(
        <div className="detail-container">
            <div className="principal-img_container">
                <img className="principal-img" src={detail.url} alt=""></img>
            </div>
            <div className="detail-img_container">
                <img className="detail-img" src={detail.detailUrl} alt=""></img>
                <img className="detail-img" src={detail.detailUrl2} alt=""></img>
                <img className="detail-img" src={detail.detailUrl3} alt=""></img>
                <img className="detail-img" src={detail.detailUrl4} alt=""></img>
                <img className="detail-img" src={detail.detailUrl5} alt=""></img>
            </div>
            <ul className="detail-list">
                <li id="detail-title">{detail.titulo}</li><br></br>
                <li>{detail.descripcion}</li>
                <li><b>Talle: </b>{detail.talle}</li>
                <li><b>Peso: </b>{detail.peso} kg</li>
                <li><b>Material: </b> {detail.material}</li>
                <li><b>Precio: </b> ${detail.precio}</li>
            </ul>

            <div className="counter-container">
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