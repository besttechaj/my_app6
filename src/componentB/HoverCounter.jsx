import React, { Component } from 'react';
import Counter from './Counter';
class HoverCounter extends Component {
  render() {
    let { name, handleClick, count } = this.props;
    return (
      <div>
        <h1>Hover Counter component</h1>
        <button onClick={handleClick}>
          {name} || {count} times clicked
        </button>
      </div>
    );
  }
}

//* step2: Passing one component to another component as a parameter
export default Counter(HoverCounter, 10);
