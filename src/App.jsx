import { useState } from "react";

const tools = [
  { name: "ChatGPT", category: "Writing AI" },
  { name: "Claude", category: "Writing AI" },
  { name: "Canva AI", category: "Design AI" },
  { name: "Leonardo AI", category: "Image AI" },
  { name: "Perplexity", category: "Research AI" },
  { name: "ElevenLabs", category: "Voice AI" },
  { name: "Gamma AI", category: "Presentation AI" },
  { name: "Runway ML", category: "Video AI" }
];

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

        <div className="hero">
          <h1>Find The Best AI Tools</h1>

          <p>
            Discover the latest AI tools for Students,
            Creators, Developers and Businesses.
          </p>

          <input
            className="search"
            placeholder="Search AI tools..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>

        <h2 style={{marginBottom:"20px"}}>🔥 Trending AI Tools</h2>

        <div className="grid">
          {filtered.map((tool)=>(
            <div className="card" key={tool.name}>
              <h2>{tool.name}</h2>
              <p>{tool.category}</p>

              <button className="btn">
                View Tool
              </button>

            </div>
          ))}
        </div>

      </div>
    </>
  );
}