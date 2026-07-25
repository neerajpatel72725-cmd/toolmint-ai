import { useState } from "react";
import tools from "./data/tools";
import Hero from "./components/Hero";

export default function App() {
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");

  const filtered = tools.filter(tool => {
  const matchSearch = tool.name
    .toLowerCase() 
    .includes(search.toLowerCase());
  const matchCategory =
    category === "All" || tool.category === category;

  return matchSearch && matchCategory;
});
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

<Hero totalTools={filtered.length} />
<div className="featured-tool">
  <h2>🔥 Featured AI Tool</h2>

  <div className="tool-header">
    <img
      src="https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com"
      alt="ChatGPT"
      width="40"
    />

    <div>
      <h3>ChatGPT</h3>
      <p>Best AI Assistant for Creators</p>
    </div>
  </div>

  <div className="badges">
    <span>⭐ 4.9</span>
    <span>Free + Paid</span>
  </div>

  <a
    href="https://chatgpt.com"
    target="_blank"
    rel="noreferrer"
  >
    <button className="btn">Try Now</button>
  </a>
</div>
<div className="categories">
  <div className="category-card" onClick={() => setCategory("YouTube AI")}>
    🎥 YouTube Creator
  </div>

  <div className="category-card" onClick={() => setCategory("Design AI")}>
    🎨 Design AI
  </div>

  <div className="category-card" onClick={() => setSearch("ChatGPT")}>
    🤖 ChatGPT
  </div>

  <div className="category-card" onClick={() => setCategory("Coding AI")}>
    💻 Coding AI
  </div>

  <div className="category-card" onClick={() => setCategory("Video AI")}>
    🎬 Video AI
  </div>

  <div className="category-card" onClick={() => setCategory("Voice AI")}>
    🎤 Voice AI
  </div>
</div>

        <input
          className="search"
          placeholder="Search AI tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
<select
  className="search"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option>All</option>
  <option>Writing AI</option>
  <option>Image AI</option>
  <option>Design AI</option>
  <option>Research AI</option>
  <option>Coding AI</option>
  <option>Voice AI</option>
  <option>Video AI</option>
</select>

     <div className="grid">
  {filtered.map((tool) => (
    <div className="card" key={tool.name}>
      <div className="tool-header">
        <img src={tool.logo} alt={tool.name} width="40" />
        <h2>{tool.name}</h2>
      </div>

      <div className="badges">
        <span>⭐ {tool.rating}</span>
        <span>{tool.type}</span>
      </div>

      <p>{tool.category}</p>
      <p className="description">{tool.description}</p>

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
        