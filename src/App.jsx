import { useState } from "react";

const tools = [
  {
    name: "ChatGPT",
    category: "Writing AI",
    link: "https://chatgpt.com"
  },
  {
    name: "Claude",
    category: "Writing AI",
    link: "https://claude.ai"
  },
  {
    name: "Canva AI",
    category: "Design AI",
    link: "https://canva.com"
  },
  {
    name: "Leonardo AI",
    category: "Image AI",
    link: "https://leonardo.ai"
  },
  {
    name: "Perplexity",
    category: "Research AI",
    link: "https://perplexity.ai"
  },
  {
    name: "ElevenLabs",
    category: "Voice AI",
    link: "https://elevenlabs.io"
  }
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

        <h1>Discover The Best AI Tools</h1>

        <p>Find powerful AI tools in one place.</p>

        <input
          className="search"
          placeholder="Search AI tools..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <div className="grid">
          {filtered.map((tool)=>(
            <div className="card" key={tool.name}>
              <h2>{tool.name}</h2>

              <p>{tool.category}</p>

              <a
                href={tool.link}
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn">
                  Visit Official Website
                </button>
              </a>

            </div>
          ))}
        </div>

      </div>
    </>
  );
}