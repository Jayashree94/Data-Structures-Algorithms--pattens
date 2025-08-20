import { useState, useEffect } from "react";

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;


    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    setError(null); 

     fetch(url, { ...options, signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((json) => setData(json))
       .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));

      return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}



//usage

import React from "react";
import { useFetch } from "./useFetch";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (loading) return <p>⏳ Loading...</p>;
  if (error) return <p>❌ Error: {error}</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );

}