import React from "react";
import PropTypes from "prop-types";

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
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

PostList.propTypes = {
  count: PropTypes.number.isRequired
};

export default PostList;
