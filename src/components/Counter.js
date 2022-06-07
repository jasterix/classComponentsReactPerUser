import React, { Component } from "react";

import Amount from "./Amount";

class Counter extends Component {
  handleIncrement = (event) => {
    this.props.increment();
  };

  handleDecrement = (event) => {
    this.props.decrement();
  };

  render() {
    const { count, amount, name } = this.props;

    return (
      <div style={{ backgroundColor: "grey", margin: "10px" }}>
        <h1>{name}</h1>
        <h3>Count: {count}</h3>
        <div style={{ justifyContent: "center" }}>
          <button onClick={this.handleIncrement}>
            increment +{this.props.amount}{" "}
          </button>
          <button onClick={this.handleDecrement}>
            decrement -{this.props.amount}
          </button>
          <h2> Increase by: </h2>
          <Amount
            amount={this.props.amount}
            amountHandle={this.props.updateAmount}
          />
        </div>
      </div>
    );
  }
}

export default Counter;
