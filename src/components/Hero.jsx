export default function Hero({ totalTools }) {
  return (
    <>
      <div className="hero">
        <h2>🚀 AI Tools for Creators</h2>

        <p>
          Discover the best AI tools for YouTube, Instagram,
          Thumbnails, Posters, Video Editing and Coding.
        </p>

        <button className="btn">Explore AI Tools</button>
      </div>

      <div className="hero">
        <h2>💡 Why GENORA AI ?</h2>

        <p>
          Save hours by discovering the best AI tools for content creation,
          design, coding, research and productivity — all in one place.
        </p>

        <div className="badges">
          <span>⚡ Fast Search</span>
          <span>🔥 Trending Tools</span>
          <span>🎯 Creator Friendly</span>
        </div>
      </div>

      <p>
        <strong>{totalTools}</strong> AI Tools Found
      </p>
    </>
  );
}