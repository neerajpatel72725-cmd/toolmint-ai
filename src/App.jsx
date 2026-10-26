import { useState } from "react";
import tools from "./data/tools";

import Hero from "./components/Hero";
import OurAITools from "./components/OurAITools";
import Categories from "./components/Categories";
import AICreatorStudio from "./components/AICreatorStudio";
import ThumbnailGenerator from "./ThumbnailGenerator";
import SearchBar from "./components/SearchBar";
import ToolCard from "./components/ToolCard";
import Footer from "./components/Footer";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = tools.filter((tool) => {
    const matchesSearch = tool.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || tool.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <nav className="navbar">
        <a href="#home" className="brand">
          ✦ GENORA AI
        </a>

        <div className="menu">
          <a href="#home">Home</a>
          <a href="#tools">AI Tools</a>
          <a href="#categories">Categories</a>
          <a href="#creator">Creator Studio</a>
        </div>
      </nav>

      <main className="container">
        <section id="home">
          <Hero totalTools={filtered.length} />
        </section>

        <section className="tool-discovery">
          <div className="section-heading">
            <span className="eyebrow">YOUR AI TOOLKIT</span>
            <h2>Find the right AI for your next idea.</h2>
            <p>Search, explore and discover tools for your workflow.</p>
          </div>

          <SearchBar
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
          />
        </section>

        <section id="categories" className="category-section">
          <div className="section-heading">
            <span className="eyebrow">EXPLORE BY INTEREST</span>
            <h2>Browse Categories</h2>
          </div>

          <Categories
            setCategory={setCategory}
            setSearch={setSearch}
          />
        </section>

        <section id="tools" className="tools-section">
          <div className="section-heading">
            <span className="eyebrow">THE TOOL DIRECTORY</span>
            <h2>
              {category === "All" ? "Explore AI Tools" : category}
            </h2>
            <p>{filtered.length} tools to explore</p>
          </div>

          <div className="grid">
            {filtered.length > 0 ? (
              filtered.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))
            ) : (
              <div className="empty-state">
                <span>🔎</span>
                <h3>No tools found</h3>
                <p>Try another search or select a different category.</p>
                <button
                  className="btn"
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                  }}
                >
                  Show all tools
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="creator" className="creator-section">
          <AICreatorStudio />
          <ThumbnailGenerator />
        </section>

        <OurAITools />

        <section className="closing-banner">
          <span className="eyebrow">MAKE SOMETHING AMAZING</span>
          <h2>Your next great idea starts with AI.</h2>
          <p>Discover tools, explore possibilities and build your next project.</p>
          <a href="#tools" className="btn">
            Explore AI Tools →
          </a>
        </section>

        <section id="about">
          <Footer />
        </section>
      </main>
    </>
  );
}