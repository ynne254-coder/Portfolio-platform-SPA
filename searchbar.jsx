import React from 'react'

function SearchBar({ value, onChange, resultCount }) {
  return (
    <label className="search-bar">
      <span className="search-bar__icon" aria-hidden="true">⌕</span>
      <input
        className="search-bar__input"
        type="search"
        placeholder="Search by project or category"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Search projects"
      />
      <span className="search-bar__count" aria-live="polite">{resultCount}</span>
    </label>
  )
}

export default SearchBar
