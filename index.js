import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter.js'
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 
  render() {
    return (
      <div>
      <Counter/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));