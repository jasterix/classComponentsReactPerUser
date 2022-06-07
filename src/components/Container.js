import React, { Component } from "react";
import Counter from "./Counter";

class Container extends Component {
  state = {
    count: 0,
    amount: 90
  };

  handleIncrement = (event) => {
    const currentState = this.state.count;
    const amount = this.state.amount;
    return this.setState({ count: currentState + amount });
  };

  handleDecrement = () => {
    const currentState = this.state.count;
    const amount = this.state.amount;
    return this.setState({ count: currentState - amount });
  };

  handleUpdateAmount = (value) => {
    this.setState({ amount: +value });
  };

  render() {
    return (
      <div>
        <Counter
          count={this.state.count}
          amount={this.state.amount}
          increment={this.handleIncrement}
          decrement={this.handleDecrement}
          updateAmount={this.handleUpdateAmount.bind(this)}
        />
      </div>
    );
  }
}
export default Container;
