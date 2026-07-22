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
    <div className="container">
      <h1>🚀 ToolMint AI</h1>

      <p>Find the best AI tools in one place.</p>

      <input
        className="search"
        type="text"
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
  );
}