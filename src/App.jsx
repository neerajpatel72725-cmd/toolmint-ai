import { useState } from "react";
import tools from "./data/tools";

import Hero from "./components/Hero";
import OurAITools from "./components/OurAITools";
import Categories from "./components/Categories";
import AICreatorStudio from "./components/AICreatorStudio";
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
  <a href="#home">Home</a>
  <a href="#tools">Trending</a>
  <a href="#categories">Categories</a>
  <a href="#about">About</a>
</div>
        
      </nav>

      <div className="container">
        

        <div id="home">
  <Hero totalTools={filtered.length} />
<AICreatorStudio />
<OurAITools />
</div>

        
       <div id="categories">
  <Categories
    setCategory={setCategory}
    setSearch={setSearch}
  />
</div>

        <SearchBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />

        <div id="tools" className="grid">
          {filtered.map((tool) => (
            <ToolCard
              key={tool.name}
              tool={tool}
            />
          ))}
        </div>

        <div id="about">
  <Footer />
</div>
      </div>
    </>
  );
}
