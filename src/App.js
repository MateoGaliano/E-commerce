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
        <ItemListContainer greeting="Bienvenidos!"></ItemListContainer>
        <Home></Home>
        </body>
      </>
    )
  }
}

export default App;