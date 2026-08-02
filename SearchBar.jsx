function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <svg
        className="search-bar__icon"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <line
          x1="13.5"
          y1="13.5"
          x2="18"
          y2="18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search projects by title or category…"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Search projects"
      />
    </div>
  )
}

export default SearchBar