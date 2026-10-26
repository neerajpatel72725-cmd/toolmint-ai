export default function ToolCard({ tool }) {
  return (
    <article className="card">
      <div className="tool-header">
        <img
          src={tool.logo}
          alt=""
          className="tool-logo"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div>
          <h2>{tool.name}</h2>
          <p className="tool-category">{tool.category}</p>
        </div>
      </div>

      <div className="badges">
        {tool.rating != null && (
          <span className="rating">⭐ {tool.rating}</span>
        )}
        <span className="type">{tool.type || "AI Tool"}</span>
      </div>

      <p className="description">{tool.description}</p>

      <a
        className="btn"
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        🚀 Visit Tool
      </a>
    </article>
  );
}