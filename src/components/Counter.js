import React, { Fragment, Component } from "react";
import IncDecState from "./IncDecState";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      count: 0
    };
  }

  handeIncrease = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handeDecrease = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <Fragment>
        <p>{this.state.count}</p>
        <button onClick={this.handeIncrease}>Increase</button>
        <button onClick={this.handeDecrease}>Decrease</button>
        <IncDecState count={this.state.count} />
      </Fragment>
    );
  }
}
