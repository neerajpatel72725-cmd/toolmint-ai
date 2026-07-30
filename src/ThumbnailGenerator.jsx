export default function ThumbnailGenerator() {
  return (
    <section className="creator-studio">

      <h2>🎨 AI Thumbnail Generator</h2>
      <p>Create YouTube thumbnails with AI in seconds.</p>

      <div className="creator-card">

        <input
          type="text"
          placeholder="Describe your thumbnail..."
          className="search"
        />

        <br /><br />

        <select className="search">
          <option>YouTube</option>
          <option>Gaming</option>
          <option>Tech</option>
          <option>Finance</option>
          <option>Education</option>
        </select>

        <br /><br />

        <button className="btn">
          🚀 Generate Thumbnail
        </button>

      </div>

    </section>
  );
}
