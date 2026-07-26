export default function Hero({ totalTools }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>🚀 Discover the Best AI Tools</h1>

        <p>
          Explore powerful AI tools for Coding, Design,
          Writing, Video Editing, Research and Productivity —
          all in one place.
        </p>

        <button className="btn">
          Explore AI Tools
        </button>

        <div className="hero-stats">
          <div className="stat">
            <h3>{totalTools}+</h3>
            <span>AI Tools</span>
          </div>

          <div className="stat">
            <h3>🔥</h3>
            <span>Trending</span>
          </div>

          <div className="stat">
            <h3>⚡</h3>
            <span>Free & Paid</span>
          </div>
        </div>
      </div>
    </section>
  );
}