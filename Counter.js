import React, { Component } from 'react';
import { render } from 'react-dom';


export default class Counter extends Component{
  constructor(props){
    super(props);
    this.state={
      counter : 0
    }
  }
  incrementCount=()=>{
    this.setState({
      counter : this.state.counter +1
    })
  }
  render(){
    return(
      <div>
        <button onClick={this.incrementCount}>Count {this.state.counter}</button>
      </div>
    )
  }
}
