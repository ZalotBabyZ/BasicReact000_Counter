import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    valueInput: "",
    countN: 0,
    disabled: true,
  }
  addNum = () => {
    this.setState({
      countN: ++this.state.countN,
      disabled: this.state.countN <= 0
    });
  }
  minusNum = () => {
    this.setState({
      countN: this.state.countN > 0 ? --this.state.countN : 0,
      disabled: this.state.countN <= 0
    })
  }
  render() {
    return (
      <div className="App">
        <input onChange={elem => this.setState({ valueInput: elem.target.value })} style={{ width: '300px' }} />
        <h2>{this.state.valueInput}</h2>
        <button onClick={this.addNum}> + </button>
     &nbsp;&nbsp;&nbsp;{this.state.countN}&nbsp;&nbsp;&nbsp;
        <button onClick={this.minusNum}>-</button>
      </div>
    );
  }
}

export default App;
