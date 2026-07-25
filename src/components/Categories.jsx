export default function Categories({ setCategory, setSearch }) {
  return (
    <div className="categories">
      <div
        className="category-card"
        onClick={() => setCategory("YouTube AI")}
      >
        🎥 YouTube Creator
      </div>

      <div
        className="category-card"
        onClick={() => setCategory("Design AI")}
      >
        🎨 Design AI
      </div>

      <div
        className="category-card"
        onClick={() => setSearch("ChatGPT")}
      >
        🤖 ChatGPT
      </div>

      <div
        className="category-card"
        onClick={() => setCategory("Coding AI")}
      >
        💻 Coding AI
      </div>

      <div
        className="category-card"
        onClick={() => setCategory("Video AI")}
      >
        🎬 Video AI
      </div>

      <div
        className="category-card"
        onClick={() => setCategory("Voice AI")}
      >
        🎤 Voice AI
      </div>
    </div>
  );
}