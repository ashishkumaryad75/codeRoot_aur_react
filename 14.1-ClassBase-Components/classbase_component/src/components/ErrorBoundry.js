import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    // Catching the Errors
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something Went Wrong..!!!!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
