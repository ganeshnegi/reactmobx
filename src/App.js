import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {count : 0};
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement(){
    this.setState((prev, props) => ({count:prev.count + 1}));
  }

  handleDecrement(){
    // this.setState((state) => {return {count: state.count - 1}})
    this.setState((state) => { 
      if(state.count==-5) return {count: 0}; 
      else return {count:state.count-1}; 
    })
  }

  reset = () => {
    this.setState({count:0})
  }


  render(){
    const {count} = this.state;
    return(
      <section className="App">
        <h1> Count : {count} </h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </section>
    )
  };
}

// export default Counter;