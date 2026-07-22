import { useState } from "react";

const tools = [
  { name: "ChatGPT", category: "Writing AI" },
  { name: "Canva AI", category: "Image AI" },
  { name: "Leonardo AI", category: "Image AI" },
  { name: "Claude", category: "Writing AI" },
  { name: "Perplexity", category: "Research AI" },
  { name: "ElevenLabs", category: "Voice AI" }
];

export default function App() {
  const [search, setSearch] = useState("");

  const filtered = tools.filter(tool =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <nav className="navbar">
        <h2>🚀 ToolMint AI</h2>

        <div className="menu">
          <a href="#">Home</a>
          <a href="#">Tools</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
        </div>
      </nav>

      <div className="container">
        <h1>Discover the Best AI Tools</h1>

        <p>Find powerful AI tools for free.</p>

        <input
          className="search"
          placeholder="Search AI tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid">
          {filtered.map((tool) => (
            <div className="card" key={tool.name}>
              <h2>{tool.name}</h2>
              <p>{tool.category}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}