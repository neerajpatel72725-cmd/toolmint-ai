const categories = [
  "Image AI",
  "Video AI",
  "Writing AI",
  "Coding AI",
  "Marketing AI"
];

const tools = [
  { name: "ChatGPT", desc: "AI Chat Assistant" },
  { name: "Canva AI", desc: "AI Design Tool" },
  { name: "Leonardo AI", desc: "AI Image Generator" },
  { name: "ElevenLabs", desc: "AI Voice Generator" },
  { name: "Claude", desc: "AI Writing Assistant" },
  { name: "Perplexity", desc: "AI Search Engine" }
];

function App() {
  return (
    <div className="container">
      <h1>🚀 ToolMint AI</h1>

      <p>Discover the Best AI Tools in One Place</p>

      <input
        className="search"
        placeholder="Search AI tools..."
      />

      <div className="categories">
        {categories.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </div>

      <div
        style={{
          background: "#2563eb",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "30px",
          textAlign: "center"
        }}
      >
        <h2>🔥 Featured Tool</h2>
        <h3>ChatGPT</h3>
        <p>The world's most popular AI assistant.</p>
      </div>

      <div className="grid">
        {tools.map((tool) => (
          <div className="card" key={tool.name}>
            <h2>{tool.name}</h2>
            <p>{tool.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;