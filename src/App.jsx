const tools = [
  {
    name: "AI Image Generator",
    desc: "Create stunning AI images in seconds."
  },
  {
    name: "YouTube Title Generator",
    desc: "Generate viral YouTube titles."
  },
  {
    name: "Instagram Caption AI",
    desc: "Write engaging Instagram captions."
  },
  {
    name: "Logo Maker AI",
    desc: "Create beautiful logos instantly."
  }
];

function App() {
  return (
    <div className="container">
      <h1>🚀 ToolMint AI</h1>
      <p>Discover the Best AI Tools in One Place</p>

      <input
        type="text"
        placeholder="Search AI tools..."
        style={{
          padding: "12px",
          width: "300px",
          maxWidth: "90%",
          borderRadius: "10px",
          border: "none",
          marginBottom: "30px"
        }}
      />

      {tools.map((tool, index) => (
        <div
          key={index}
          style={{
            background: "#1e293b",
            padding: "20px",
            margin: "15px auto",
            borderRadius: "12px",
            maxWidth: "500px",
            textAlign: "left"
          }}
        >
          <h2>{tool.name}</h2>
          <p>{tool.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default App;