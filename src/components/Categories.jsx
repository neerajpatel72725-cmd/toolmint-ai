export default function Categories({ setCategory, setSearch }) {
  return (
    <section className="categories">

      <div className="category-card" onClick={() => setCategory("YouTube AI")}>
        <span className="category-icon">🎥</span>
        <h4>YouTube AI</h4>
      </div>

      <div className="category-card" onClick={() => setCategory("Design AI")}>
        <span className="category-icon">🎨</span>
        <h4>Design AI</h4>
      </div>

      <div className="category-card" onClick={() => setSearch("ChatGPT")}>
        <span className="category-icon">🤖</span>
        <h4>ChatGPT</h4>
      </div>

      <div className="category-card" onClick={() => setCategory("Coding AI")}>
        <span className="category-icon">💻</span>
        <h4>Coding AI</h4>
      </div>

      <div className="category-card" onClick={() => setCategory("Video AI")}>
        <span className="category-icon">🎬</span>
        <h4>Video AI</h4>
      </div>

      <div className="category-card" onClick={() => setCategory("Voice AI")}>
        <span className="category-icon">🎤</span>
        <h4>Voice AI</h4>
      </div>

    </section>
  );
}