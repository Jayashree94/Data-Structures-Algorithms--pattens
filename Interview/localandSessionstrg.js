import { use, useEffect, useState } from "react";

export default function App(){

    const [theme, setTheme] = useState(()=>{
    return localStorage.getItem("theme") || "light"});

    useEffect(() =>{
        localStorage.setItem("theme", theme)
    },[theme])


    const [draft, setDraft] = useState(() => {
        return sessionStorage.getItem("formDraft") || ""
    })

    useEffect(() => {
        sessionStorage.setItem("formDraft", draft);
    })

    return (
    <div style={{ padding: 20, background: theme === "dark" ? "#333" : "#eee", color: theme === "dark" ? "#fff" : "#000" }}>
      <h2>React LocalStorage vs SessionStorage</h2>

      {/* Theme toggle stored in LocalStorage */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme ({theme})
      </button>
       <br /><br />

      {/* Form draft stored in SessionStorage */}
      <textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Type a message (will clear if you close tab)"
        rows={5}
        cols={40}
      />
    </div>
  );
}





