import React, { useState } from "react";

const Child = React.memo(({ value }) => {
  console.log("Child rendered");
  return <div>Child value: {value}</div>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(other + 1)}>Change Other</button>
      <Child value={count} />
    </div>
  );
}
