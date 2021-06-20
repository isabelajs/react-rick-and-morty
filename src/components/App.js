import React from 'react'
import './styles/App.css';
import headerLogo from '../imgs/header__logo.png'
import CharactersContainer from './charactersContainer'

class App extends React.Component {
  render(){
    return (
      <div className="container">
        <div className="App">
            <img className= "logo"src={headerLogo} alt="logo" />
  
            <CharactersContainer/>
            
      </div>
      </div>
    );
  }
}

export default App;
