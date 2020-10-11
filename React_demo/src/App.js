import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Counter from './Counter'
import { throwStatement } from '@babel/types';

class App extends React.Component{
  state={
    count:0
  }
  increment= ()=>{
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement= ()=>{
    if(this.state.count> 0){
    this.setState({
        count: this.state.count - 1
    })}
    else{
        this.setState({
          count:0
        })
      }
    }
  
  render(){
    return (
<div>
 <Counter count={this.state.count}
 increment={this.increment}
 decrement={this.decrement}
 />
 
</div>
/* <div>
  <h1>Count : {this.state.count}</h1>
  <button onClick={this.increment}>Inc</button>
  <button onClick={this.decrement}>Dec</button>
</div>*/
) 
}

}
export default App;
