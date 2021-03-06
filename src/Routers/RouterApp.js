import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/Detail/ItemDetailContainer';
import Home from '../components/Home/Home';
import './RouterApp.css';
import Navbar from '../components/Navbar/Navbar';
import Cart from '../components/Cart/Cart';
import Information from '../components/Checkout/Information';


function RouterApp() {

  return (
    <div className="Router-app">
        <Router>

              <Navbar></Navbar>

              <Switch>
                    <Route exact path="/" component={Home}></Route>

                    <Route path="/category/:categoryId" component={ItemListContainer}></Route>

                    <Route path="/item/:itemId" component={ItemDetailContainer}></Route>

                    <Route path="/cart" component={Cart}></Route>

                    <Route path="/information" component={Information}></Route>
                    
                    <Redirect to="/"/>
              </Switch>
              

        </Router>
    </div>
  );
}

export default RouterApp;