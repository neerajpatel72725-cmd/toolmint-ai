export default function SearchBar({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <div className="search-wrapper">

      <input
        className="search"
        placeholder="🔍 Search AI tools..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="search category-select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All</option>
        <option>Writing AI</option>
        <option>Image AI</option>
        <option>Design AI</option>
        <option>Research AI</option>
        <option>Coding AI</option>
        <option>Voice AI</option>
        <option>Video AI</option>
      </select>

    </div>
  );
}