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
type="search"
aria-label="Search AI tools"
placeholder="🔍 Search AI tools..."
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

  <select
    className="search category-select"
    aria-label="Filter tools by category"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="All">All Categories</option>
    <option value="Research AI">Research AI</option>
    <option value="Writing AI">Writing AI</option>
    <option value="Image AI">Image AI</option>
    <option value="Video AI">Video AI</option>
    <option value="Coding AI">Coding AI</option>
    <option value="Voice AI">Voice AI</option>
    <option value="YouTube AI">YouTube AI</option>
    <option value="Design AI">Design AI</option>
  </select>
</div>

);
}