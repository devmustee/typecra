import React from 'react';

// Step 1: Define a type (or interface) for the props
type GreetingProps = {
  name: string; // 'name' must always be a string
};

// Step 2: Use React.FC with the defined props type
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Step 3: Return JSX using the typed props
  return <div>Hello, {name}!</div>;
};

export default Greeting;
