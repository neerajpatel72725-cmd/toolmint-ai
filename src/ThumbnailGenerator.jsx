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
          <option>Instagram</option>
          <option>Facebook</option>
        </select>

        <br /><br />

        <select className="search">
          <option>Gaming</option>
          <option>Business</option>
          <option>Tech</option>
          <option>Education</option>
        </select>

        <br /><br />

        <button className="btn">
          🎨 Generate Thumbnail
        </button>

        <br /><br />

        <div className="creator-preview">
          Preview will appear here
        </div>

      </div>

    </section>
  );
}