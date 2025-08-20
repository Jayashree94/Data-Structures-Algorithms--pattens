async function fetchWithTimeout(url, options = {}, timeout = 5000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout); 

    try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal, // attach signal to fetch
    });
    return response;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw error;
  }
}



fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", {}, 2000)
  .then(res => res.json())
  .then(data => console.log("Data:", data))
  .catch(err => console.error("Error:", err.message));