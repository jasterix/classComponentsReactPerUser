import React, { Component } from "react";
import Counter from "./Counter";
import axios from "axios";

class Container extends Component {
  state = {
    count: 0,
    amount: 1,
    users: []
  };

  componentDidMount() {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
        <h2> Total Count: {this.state.count}</h2>
        {this.state.users
          ? this.state.users.map((user) => {
              return (
                <Counter
                  key={user.id}
                  name={user.name}
                  count={this.state.count}
                  amount={this.state.amount}
                  increment={this.handleIncrement}
                  decrement={this.handleDecrement}
                  updateAmount={this.handleUpdateAmount}
                />
              );
            })
          : null}
      </div>
    );
  }
}
export default Container;
