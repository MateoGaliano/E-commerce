import "./Home.css";
import Portada from '../../Assets/Portada.png';
import {findAll} from '../Firebase/FirebaseComponent';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import CounterContainer from '../Counter/CounterContainer';

function Home() {

  const [news, setNews] = useState([])

  useEffect(() => {

    new Promise((resolve, reject) => {

      findAll().then(v => {
         resolve(v)
         })

    }).then((resultado) => setNews(resultado));
  },[]);

  return (
    <>
      <main className="landing">
        <h1 className="display-1">Woody's</h1>
        <h2 className="display-1">French</h2>
        <h3>
          <i>
            Los diseños más divertidos<br></br>para tus mascotas
          </i>
        </h3>
        <div className="landing-img">
          <div className="background"></div>
          <div className="picture">
            <img src={Portada} alt="Woody French bulldog" title="Woody"></img>
          </div>
        </div>
        <div className="green-square"></div>
        <div className="redes">
          <a href="https://www.instagram.com/woodysfrench/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@woodysfrench/" target="_blank" rel="noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
        <div className="novedades">
          {news.map((obj) => {
            return(
            <div className="card-container">
            <div className="img-container">
              <img className="img-collar" src={obj.url} alt=""></img>
            </div>

            <ul className="list">
              <li>{obj.titulo}</li>
              <li>${obj.precio}</li>
            </ul>
            <Link to={`/item/${obj.id}`}>
              <button type="button" id="detail-button" className="btn btn-dark btn-sm">Detalle</button>
            </Link>
            <div className="counter-container">
            <CounterContainer
          categoria={obj.categoria}
          titulo={obj.titulo}
          descripcion={obj.descripcion}
          talle={obj.talle}
          material={obj.material}
          precio={obj.precio}
          stockInicial={obj.stock}
          url={obj.url}
          />
            </div>
        </div>
            )
          })
          }
        </div>
      </main>
    </>
  );
}

export default Home;
