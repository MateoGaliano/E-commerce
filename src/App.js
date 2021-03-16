import { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Container from './components/ItemContainer/Container';
import './App.css'
import ItemContainer from './components/Counter/ItemContainer';

class App extends Component {
  render() {
    return(
      <>
        <body>
        <NavBar></NavBar>
        <Home></Home>
        <Container></Container>
        <ItemContainer></ItemContainer>
        </body>
      </>
    )
  }
}

export default App;