import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/Detail/ItemDetailContainer';
import Home from '../components/Home/Home';
import './RouterApp.css';
import Navbar from '../components/Navbar/Navbar';

function RouterApp() {
  return (
    <div className="Router-app">
        <Router>
              
              <Navbar></Navbar>
        
              <Switch>
                    <Route exact path="/" component={Home}></Route>

                    <Route path="/category/:categoryId" component={ItemListContainer}></Route>

                    <Route path="/item/:itemid" component={ItemDetailContainer}></Route>
              </Switch>
              <Redirect to="/"/>
        </Router>
    </div>
  );
}

export default RouterApp;