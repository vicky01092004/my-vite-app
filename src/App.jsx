import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Enter Your Name</h1>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <h2>{name && `WELCOME ${name.toUpperCase()}`}</h2>
    </div>
  );
}

export default App;
