export default function Categories({ setCategory, setSearch }) {
  const chooseCategory = (category) => {
    setSearch("");
    setCategory(category);
    document.getElementById("tools")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const categories = [
    { name: "YouTube AI", icon: "🎥" },
    { name: "Design AI", icon: "🎨" },
    { name: "Coding AI", icon: "💻" },
    { name: "Video AI", icon: "🎬" },
    { name: "Voice AI", icon: "🎤" },
    { name: "Research AI", icon: "🔎" },
    { name: "Writing AI", icon: "✍️" },
    { name: "Image AI", icon: "🖼️" },
  ];

  return (
    <section className="categories" aria-label="AI tool categories">
      {categories.map((category) => (
        <button
          type="button"
          className="category-card"
          key={category.name}
          onClick={() => chooseCategory(category.name)}
        >
          <span className="category-icon" aria-hidden="true">
            {category.icon}
          </span>
          <h4>{category.name}</h4>
        </button>
      ))}
    </section>
  );
}