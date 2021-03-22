import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Collares from '../components/Categorias/Collares';
import Ropa from '../components/Categorias/Ropa';
import Alimento from '../components/Categorias/Alimento';
import Accesorios from '../components/Categorias/Accesorios';
import ItemDetailContainer from '../components/Detail/ItemDetailContainer';
import './RouterApp.css';


function RouterApp() {
  return (
    <div className="Router-app">
        <Router>
              <nav className="nav">
                <ul className="nav-links">
                  <li>
                    <Link to="/collares">Collares</Link>
                  </li>
                  <li>
                    <Link to="/ropa">Ropa</Link>
                  </li>
                  <li>
                    <Link to="/alimento">Alimento</Link>
                  </li>
                  <li>
                    <Link to="/accesorios">Accesorios</Link>
                  </li>
                </ul>

                <i>Logo</i>

                <ul>
                  <li><i>Usuario</i></li>
                  <li><i>Carrito</i></li>
                </ul>
              </nav>    

              <Switch>
                    <Route path="/collares" component={Collares}></Route>
                    <Route path="/ropa" component={Ropa}></Route>
                    <Route path="/aliemnto" component={Alimento}></Route>
                    <Route path="/accesorios" component={Accesorios}></Route>

                    <Route path="/item/:itemid" component={ItemDetailContainer}></Route>
                </Switch>
        </Router>
    </div>
  );
}

export default RouterApp;