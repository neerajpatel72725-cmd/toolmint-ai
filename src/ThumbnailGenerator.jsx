import { useState } from "react";
import { generateImage } from "./api/imageApi";
export default function ThumbnailGenerator() {
 const [prompt, setPrompt] = useState("");
const [image, setImage] = useState("");
const [loading, setLoading] = useState(false);
const handleGenerate = async () => {
  if (!prompt.trim()) {
    alert("Please enter a prompt");
    return;
  }

  try {
    setLoading(true);

    const result = await generateImage(prompt);

    setImage(result);
  } catch (err) {
    alert("Image generation failed.");
    console.error(err);
  } finally {
    setLoading(false);
  }
};

 return (
    <section className="creator-studio">

      <h2>🎨 AI Thumbnail Generator</h2>
      <p>Create YouTube thumbnails with AI in seconds.</p>

      <div className="creator-card">
<input
  type="text"
  placeholder="Describe your thumbnail..."
  className="search"
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
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

        <<button
  className="btn"
  onClick={handleGenerate}
>
  {loading ? "Generating..." : "🎨 Generate Thumbnail"}
</button>
        <br /><br />

        <<div className="creator-preview">
  {image ? (
    <img
      src={image}
      alt="Generated Thumbnail"
      style={{
        width: "100%",
        borderRadius: "12px"
      }}
    />
  ) : (
    "Preview will appear here"
  )}
</div>
      </div>

    </section>
  );
}