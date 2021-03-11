import NavBar from './components/NavBar';
import Home from './components/Home';
import { Component } from 'react';
import ItemListContainer from './components/ItemListContainer';
import './App.css'

class App extends Component {
  render() {
    return(
      <>
        <body>
        <NavBar title="Woody"></NavBar>
        <Home></Home>
        <ItemListContainer greeting="Bienvenidos!">
          <p>En esta web vas a poder encontrar</p>
        </ItemListContainer>
        <ItemListContainer>
          <li>Collares</li>
          <li>Alimento</li>
          <li>Ropa</li>
        </ItemListContainer>
        </body>
      </>
    )
  }
}

export default App;