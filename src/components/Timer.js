import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      timerId: null
    };
  }

  componentDidMount() {
    const timerId = setInterval(() => {
      this.setState((state, props) => ({
        time: state.time + 1
      }));
    }, 1000);

    this.setState({ timerId: timerId });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}
