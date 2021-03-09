import "../Estilos/Home.css";

function Home() {
  return (
    <>
      <main className="landing">
        <h1>Woody's</h1>
        <h2>French</h2>
        <h3>
          <i>
            Los diseños más divertidos<br></br>para tus mascotas
          </i>
        </h3>
        <div className="landing-img">
          <div className="background"></div>
          <div className="picture">
            <img src="/Assets/Portada.png" alt="Woody French bulldog" title="Woody"></img>
          </div>
        </div>

        <div className="redes">
          <a href="https://www.instagram.com/woodysfrench/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@woodysfrench/" target="_blank">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </main>
    </>
  );
}

export default Home;
