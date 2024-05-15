import React, { Component } from 'react';

export default function Counter(WrappedComponent, value) {
  console.log(WrappedComponent, value);
  //* step3: returning a new class
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = { count: 0 };
    }

    handleClick = (e) => {
      this.setState({ count: this.state.count + value });
    };

    render() {
      console.log(NewComponent);
      return (
        <WrappedComponent
          count={this.state.count}
          handleClick={this.handleClick}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
}
