import React from 'react';
import '../Estilos/NavBar.css'
import {useState} from 'react';

const NavBar = () => {

/* CODIGO PARA DESPUES

    // MENU - Click + desplegable
  const navSlide = () => {
    const burger = document.getElementsByClassName (".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    console.log(burger)

    burger.addEventListener("click", burgerclick);

    function burgerclick() {

      nav.classList.toggle("nav-active");

      //animation-items
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `categorias .5s ease forwards ${index / 4 + 0.5}s`;
        }
      });

      //Animation-burger
      burger.classList.toggle("cruz");
    }
  };

  navSlide();
*/

const [dropDown, setDropDown] = useState(false)

const setOpenClose = () =>
  setDropDown(!dropDown)


  return (
    <>
      <header>
        <nav>
          <button className="burger" onClick={dropDown} toggle={setOpenClose}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </button>

          <ul className="nav-links">
            <li>
              <a href="Secciones\Collares y correas\index.html">Collares</a>
            </li>
            <li>
              <a href="Secciones\Ropa\index.html">Ropa</a>
            </li>
            <li>
              <a href="Secciones\Alimento\index.html">Alimento</a>
            </li>
            <li>
              <a href="Secciones\Accesorios\index.html">Accesorios</a>
            </li>
          </ul>
          
          <div>
            <i className="fas fa-shopping-bag" id="bag"></i>
            <i className="fas fa-user" id="user"></i>
          </div>
        
          <div className="login">
            <form>
              <label>Login</label>
              <br></br>
              <input
                type="email"
                id="mail"
                placeholder="Usuario"
                minLength="5"
                maxLength="30"
                required
              ></input>
              <input
                type="password"
                id="contra"
                placeholder="Contraseña"
                minLength="3"
                maxLength="10"
                pattern="[A-Za-z0-9)"
                required
              ></input>
              <input type="submit" id="ingresar" value="Ingresar"></input>
            </form>
            <ul className="registro">
              <li>
                <a href="registro/index.html">Registrarse</a>
              </li>
              <li>
                <a href="">Olvidaste tu contraseña?</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;

