import React, { Component } from 'react';

// Step 1: Define props type (empty object because no props are used)
type CounterProps = {};

// Step 2: Define state type (count is a number)
type CounterState = {
  count: number;
};

// Step 3: Extend Component with props and state types
class Counter extends Component<CounterProps, CounterState> {
  // Step 4: Explicitly type and initialize state
  state: CounterState = {
    count: 0
  };

  // Step 5: Define increment as an arrow function with correct typing
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        {/* Step 6: onClick is typed automatically, no extra work needed */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
