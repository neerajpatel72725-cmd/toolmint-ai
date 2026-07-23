import { useState } from "react";
import tools from "./data/tools";

export default function App() {
  const [search, setSearch] = useState("");

  const filtered = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <nav className="navbar">
        <h2>🚀 ToolMint AI</h2>

        <div className="menu">
          <a href="#">Home</a>
          <a href="#">Trending</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
        </div>
      </nav>

      <div className="container">
        <h1>Find the Best AI Tools</h1>

        <p>Discover powerful AI tools in one place.</p>

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

              <strong>{tool.type}</strong>

              <br />
              <br />

              <a
                href={tool.link}
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn">Visit Tool</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}