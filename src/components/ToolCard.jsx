export default function ToolCard({ tool }) {
  return (
    <div className="card">
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

      <a
        href={tool.link}
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn">
          Visit Tool
        </button>
      </a>
    </div>
  );
}