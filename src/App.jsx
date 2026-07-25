import { useState } from "react";
import tools from "./data/tools";

import Hero from "./components/Hero";
import FeaturedTool from "./components/FeaturedTool";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";
import ToolCard from "./components/ToolCard";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = tools.filter((tool) => {
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

        <FeaturedTool />

        <Categories
          setCategory={setCategory}
          setSearch={setSearch}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />

        <div className="grid">
          {filtered.map((tool) => (
            <ToolCard
              key={tool.name}
              tool={tool}
            />
          ))}
        </div>
      </div>
    </>
  );
}