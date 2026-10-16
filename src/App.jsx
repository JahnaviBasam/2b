import React, { useState } from 'react';

function CounterButtonFunc() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter (Functional Component)</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}

export default CounterButtonFunc;
