import { useState } from "react";
import tools from "./data/tools";

import Hero from "./components/Hero";

import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";
import ToolCard from "./components/ToolCard";
import Footer from "./components/Footer";

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
        <h2>🚀 GENORA AI</h2>

        <div className="menu">
          <a href="#">Home</a>
          <a href="#">Trending</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
        </div>
      </nav>

      <div className="container">
        

        <Hero totalTools={filtered.length} />

        
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

        <Footer />
      </div>
    </>
  );
}