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
/* ===== AI CREATOR STUDIO ===== */

.creator-studio{
  padding:70px 20px;
  text-align:center;
}

.creator-studio h2{
  font-size:38px;
  color:#fff;
  margin-bottom:10px;
}

.creator-studio p{
  color:#bdbdbd;
  margin-bottom:35px;
}

.creator-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
  gap:30px;
}

.creator-card{
  background:#111827;
  border:1px solid #2d3748;
  border-radius:20px;
  padding:30px;
  transition:.4s;
}

.creator-card:hover{
  transform:translateY(-10px);
  border-color:#38bdf8;
  box-shadow:0 15px 35px rgba(56,189,248,.35);
}

.creator-icon{
  font-size:55px;
  margin-bottom:15px;
}

.creator-card h3{
  color:#fff;
  margin-bottom:15px;
}

.creator-card ul{
  list-style:none;
  padding:0;
  margin:20px 0;
}

.creator-card li{
  margin:10px 0;
  color:#d1d5db;
}

.creator-card .btn{
  width:100%;
  margin-top:15px;
}