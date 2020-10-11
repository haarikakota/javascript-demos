import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
constructor(){
  super()
  this.state={
    meaningOfLife : 47
  }
}

handleClick = () => {
  this.setState({meaningOfLife : this.state.meaningOfLife +1})
}

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {this.state.meaningOfLife}
        </p>
        <button onClick={this.handleClick}>
          Update state
        </button>
      </header>
    </div>
  );
}
}
export default App;
