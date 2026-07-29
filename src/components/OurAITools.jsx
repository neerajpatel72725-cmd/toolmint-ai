export default function OurAITools() {
  const tools = [
    { icon: "🤖", title: "AI Chat", desc: "Smart AI Assistant" },
    { icon: "✍️", title: "AI Writer", desc: "Blogs, Emails & Stories" },
    { icon: "🎨", title: "AI Image", desc: "Generate AI Images" },
    { icon: "💻", title: "AI Coding", desc: "Write & Debug Code" },
    { icon: "🎥", title: "AI Video", desc: "Create AI Videos" },
    { icon: "🎤", title: "AI Voice", desc: "Voice Generator" },
    { icon: "🌍", title: "Translator", desc: "Translate Languages" },
    { icon: "📄", title: "Resume AI", desc: "Professional Resume" },
    { icon: "📊", title: "Presentation", desc: "Create PPT Instantly" },
    { icon: "📧", title: "Email AI", desc: "Professional Emails" },
  ];

  return (
    <section className="our-ai-tools">
      <h2>🚀 Our AI Tools</h2>
      <p>Everything you need in one AI platform.</p>

      <div className="ai-grid">
        {tools.map((tool, index) => (
          <div className="ai-card" key={index}>
            <div className="ai-icon">{tool.icon}</div>
            <h3>{tool.title}</h3>
            <p>{tool.desc}</p>
            <span className="coming">Coming Soon</span>
          </div>
        ))}
      </div>
    </section>
  );
}