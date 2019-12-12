import React from "react";
import PropTypes from "prop-types";

class IncDecState extends React.Component {
  constructor(props) {
    super(props);
    console.log("IncDecState // constructor");
    this.state = {
      text: ""
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("IncDecState // shouldComponentUpdate");
    console.log("nextProps:", nextProps);
    console.log("this.props:", this.props);
    console.log("nextState:", nextState);
    console.log("this.state:", this.state);

    if (
      nextProps.count === this.props.count &&
      nextState.text === this.state.text
    ) {
      console.log("IncDecState // shouldComponentUpdate --- no update needed");
      return false;
    }
    console.log("IncDecState // shouldComponentUpdate --- update is needed");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("IncDecState // componentDidUpdate");
    if (this.props.count > prevProps.count) {
      this.setState({
        text: "Increasing"
      });
    } else if (this.props.count < prevProps.count) {
      this.setState({
        text: "Decreasing"
      });
    }
  }

  render() {
    return <div>{this.state.text}</div>;
  }
}

IncDecState.propTypes = {
  count: PropTypes.number.isRequired
};

export default IncDecState;
