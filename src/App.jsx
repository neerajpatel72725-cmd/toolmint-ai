import { useState } from "react";
import tools from "./data/tools";

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
<p><strong>{filtered.length}</strong> AI Tools Found</p>

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
              <h2>{tool.name}</h2>
              <p>⭐ {tool.rating}</p>

              <p>{tool.category}</p>
              <p   className="description">{tool.description}</p>

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