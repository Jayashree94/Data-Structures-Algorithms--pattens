import React, { useState, useCallback } from "react";

// Child component
const Button = React.memo(({ onClick, label }) => {
  console.log(`Rendering Button: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Without useCallback -> new function created every render
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // ✅ function reference is stable

  return (
    <div>
      <h2>Count: {count}</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <Button onClick={increment} label="Increment" />
    </div>
  );
}

