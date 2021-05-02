import {Link} from 'react-router-dom';
import {useState} from 'react';
import logo from '../../Assets/logo.png';
import User from '../User/User';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

const Navbar = () => {

  const [active, setActive] = useState(false)

  const handleClick = () => {
      setActive(!active)
  }

    return(
        <nav className="nav">
          <svg className="menu-icon" onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
              <div className={`category-menu ${active ? 'active' : ''}`}>
                <ul className="nav-links">
                  <li>
                    <Link to="/category/novedades">Novedades</Link>
                  </li>
                  <li>
                    <Link to="/category/collares">Collares</Link>
                  </li>
                  <li>
                    <Link to="/category/ropa">Ropa</Link>
                  </li>
                  <li>
                    <Link to="/category/alimento">Alimento</Link>
                  </li>
                  <li>
                    <Link to="/category/accesorios">Accesorios</Link>
                  </li>
                </ul>
                </div>
                
                <Link to="/">
                  <img src={logo} className="logo" alt=""></img>
                </Link>

                <div className="icons">
                    <div className="user">
                      <User></User>
                    </div>
                    <CartWidget></CartWidget>
                </div>
              </nav>
    )
}

export default Navbar;