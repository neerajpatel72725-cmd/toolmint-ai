export default function ToolCard({ tool }) {
  return (
    <div className="card">

      <div className="tool-header">
        <img
          src={tool.logo}
          alt={tool.name}
          className="tool-logo"
        />

        <div>
          <h2>{tool.name}</h2>
          <p className="tool-category">
            {tool.category}
          </p>
        </div>
      </div>

      <div className="badges">
        <span className="rating">
          ⭐ {tool.rating}
        </span>

        <span className="type">
          {tool.type}
        </span>
      </div>

      <p className="description">
        {tool.description}
      </p>

      <a
        href={tool.link}
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn">
          🚀 Visit Tool
        </button>
      </a>

    </div>
  );
}