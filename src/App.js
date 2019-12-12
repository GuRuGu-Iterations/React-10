import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Counter from "./components/Counter";
import Timer from "./components/Timer";
import "./App.css";

class App extends Component {
  constructor(props) {
    console.log("App // constructor");
    super(props);
    this.state = {
      posts: null
    };
  }

  componentDidMount = async () => {
    console.log("App // componentDidMount");
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

  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <Link to="/">Counter</Link>
            <Link to="/timer">Timer</Link>
          </nav>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Counter} />
              <Route path="/timer" component={Timer} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
