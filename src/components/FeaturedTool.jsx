export default function FeaturedTool() {
  return (
    <div className="featured-tool">
      <h2>🔥 Featured AI Tool</h2>

      <div className="tool-header">
        <img
          src="https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com"
          alt="ChatGPT"
          width="40"
        />

        <div>
          <h3>ChatGPT</h3>
          <p>Best AI Assistant for Creators</p>
        </div>
      </div>

      <div className="badges">
        <span>⭐ 4.9</span>
        <span>Free + Paid</span>
      </div>

      <a
        href="https://chatgpt.com"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn">Try Now</button>
      </a>
    </div>
  );
}