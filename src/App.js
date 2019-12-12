import React, { Component } from "react";

import IncDecState from "./components/IncDecState";
import Timer from "./components/Timer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dobby",
      posts: null,
      count: 0
    };
  }

  componentDidMount = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET"
      });

      const posts = await res.json();

      this.setState({
        posts
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };

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
      <div className="App">
        <header className="App-header">
          <p>{this.state.count}</p>
          <button onClick={this.handeIncrease}>Increase</button>
          <button onClick={this.handeDecrease}>Decrease</button>
          <IncDecState count={this.state.count} />
          <Timer />
        </header>
      </div>
    );
  }
}

export default App;
