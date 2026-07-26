export default function FeaturedTool() {
  return (
    <section className="featured-tool">
      <div className="featured-badge">
        🔥 Featured AI Tool
      </div>

      <div className="featured-content">

        <img
          className="featured-logo"
          src="https://www.google.com/s2/favicons?sz=128&domain=chatgpt.com"
          alt="ChatGPT"
        />

        <div className="featured-info">

          <h2>ChatGPT</h2>

          <p className="featured-desc">
            The world's most popular AI assistant for writing,
            coding, research, learning and productivity.
          </p>

          <div className="featured-tags">
            <span>⭐ 4.9</span>
            <span>🤖 AI Assistant</span>
            <span>🆓 Free + Paid</span>
          </div>

          <a
            href="https://chatgpt.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">
              🚀 Try ChatGPT
            </button>
          </a>

        </div>

      </div>
    </section>
  );
}